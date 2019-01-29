import { fakeResults } from "./testResponse"
import chalk from "chalk"
import Location from "../models/location.model"
import npmAirports from "airports"
import airlinesObj from "./airlinesObj.json"
import Company from "../models/company.model"
import { amadeus } from "./amadeus_instance"
import fs from "fs"
export function getAirlineInfo(iataCode) {
  return amadeus.referenceData.airlines.get({
    airlineCodes: iataCode
  })
}

// send flight info to amadeus and get results back.
export const getFlights = async ({
  origin,
  destination,
  departureDate,
  returnDate,
  currency
}) => {
  console.log(chalk.red("calling amadeus for flights"))
  return amadeus.shopping.flightOffers
    .get({
      origin,
      destination,
      departureDate,
      returnDate,
      currency: currency || "USD"
    })
    .then(response => {
      console.log("amadeus response")
      return response
    })
    .catch(err => console.log(chalk.red("ERROR in amadeus"), err))
}

export const parseResults = async rawResults => {
  // rawResults comes back from amadeus
  const { data } = rawResults

  function parseOffer(offer) {
    // offer.offerItems.length is always 1
    const { price, services } = offer.offerItems[0]
    const segments = services.map(service => service.segments)
    // if oneWay segments.length is 1.   roundtrip means segments.length == 2
    return {
      id: offer.id,
      price,
      segments
    }
  }
  const parsed = data.map(offer => parseOffer(offer))
  const [airlines, airports] = await getAirportsAndAirlinesInfo(rawResults)
  return { parsed, airlines, airports }
}

export async function getAirportsAndAirlinesInfo(rawResults) {
  // to get info about airlines and airports ONCE, without making multiple calls to DB for each flight.
  // TODO replace this with the 'library' info at the end of the raw result.
  const { dictionaries } = rawResults
  const { aircraft, carriers, locations } = dictionaries

  const airportCodes = Object.keys(locations)
  const airlineCodes = Object.keys(carriers)

  const airports = Promise.all(
    airportCodes.map(async iata => {
      let airport = await Location.findOne({ airportCode: iata })
      if (!airport) {
        console.log(chalk.red(`creating airport in db ${iata}`))
        const { lat, lon, name } = npmAirports.find(ap => ap.iata === iata)
        airport = await Location.create({
          airportCode: iata,
          iata,
          locType: "airport",
          name,
          nameShort: locations[iata].detailedName,
          lat,
          lng: lon
        }).catch(err => console.log("ERROR line 47", err))
      } else {
        console.log(chalk.green(`airport ${iata} found in DB`))
      }
      return airport
    })
  )
  const airlines = Promise.all(
    airlineCodes.map(airlineCode => {
      return Company.findOne({ airlineCode }).then(company => {
        if (company) {
          console.log(chalk.blue(`airline ${airlineCode} found in DB`))
          return company
        }
        if (!company) {
          const airlineData = airlinesObj[airlineCode]
          console.log(
            chalk.red(`creating ${chalk.blue("airline")} in db ${airlineCode}`)
          )
          let companyObj = { airlineCode }
          if (airlineData) {
            companyObj = { airlineCode, ...airlineData }
          }
          return Company.create(companyObj).catch(err =>
            console.log("ERROR creating company", err)
          )
        }
      })
    })
  )
  return Promise.all([airlines, airports])
}
