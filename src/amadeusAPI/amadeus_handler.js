import { fakeResults } from "./testResponse"
import chalk from "chalk"
import Location from "../models/location.model"
import npmAirports from "airports"
import airlinesObj from "./airlinesObj.json"
import Company from "../models/company.model"
import { amadeus } from "./amadeus_instance"

export function getAirlineInfo(iataCode) {
  return amadeus.referenceData.airlines.get({
    airlineCodes: iataCode
  })
}
// export function getAirportInfo(iataCode) {
//   return "nope"
//   return amadeus.referenceData.location(iataCode).get()
// }

export const parseResults = rawResults => {
  const { data } = rawResults
  const parseService = service => {
    const segments = service[0].segments
    return segments
  }
  function parseOffer(offer) {
    // offer.offerItems.length is always 1
    const { price, services } = offer.offerItems[0]
    return {
      id: offer.id,
      price,
      segments: parseService(services)
    }
  }
  const maxResults = 40
  const parsed = data.slice(0, maxResults).map(offer => parseOffer(offer))
  return { parsed }
}

export const getFlights = async ({
  origin,
  destination,
  departureDate,
  returnDate,
  currency
}) => {
  console.log(chalk.red("calling amadeus for flights"))
  const response = await amadeus.shopping.flightOffers
    .get({
      origin,
      destination,
      departureDate,
      returnDate,
      currency: currency || "USD"
    })
    .catch(err => console.log(chalk.red("ERROR in amadeus"), err))
  // console.log("response", response)
  return response
}

export async function getAirportsFromResults(results) {
  const { parsed } = parseResults(results)
  const airportCodes = []
  const airlineCodes = []
  parsed.forEach(itin => {
    itin.segments.forEach(seg => {
      const depCode = seg.flightSegment.departure.iataCode
      const arrCode = seg.flightSegment.arrival.iataCode
      if (!airportCodes.includes(depCode)) airportCodes.push(depCode)
      if (!airportCodes.includes(arrCode)) airportCodes.push(arrCode)
      const carrierCode = seg.flightSegment.carrierCode
      const opCarrierCode = seg.flightSegment.operating.carrierCode
      if (!airlineCodes.includes(carrierCode)) airlineCodes.push(carrierCode)
      if (!airlineCodes.includes(opCarrierCode))
        airlineCodes.push(opCarrierCode)
    })
  })
  //
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
          console.log(chalk.green(`airline ${airlineCode} found in DB`))
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