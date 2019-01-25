import airlineCodes from "airline-codes"
import { fakeResults } from "../amadeusAPI/testResponse"
import { parseResults, getAirlineInfo } from "../amadeusAPI/amadeus_handler"
import Company from "../models/company.model"
import Location from "../models/location.model"
import airports from "../amadeusAPI/filteredAirports.json"
const companiesLocal = {}
const airportsLocal = {}

async function lookupCompany(carrierCode) {
  if (companiesLocal[carrierCode]) {
    console.log(`grabbing airline ${carrierCode} from local`)
    return companiesLocal[carrierCode]
  }
  let company = await Company.findOne({
    airlineCode: carrierCode
  }).catch(err => console.log("ERROR line 14", err))
  if (!!company) {
    console.log("company found in DB", Date())
  } else {
    console.log("creating company")
    const { data } = await getAirlineInfo(carrierCode)
    company = await Company.create({
      name: data.businessName,
      nameShort: data.commonName,
      airlineCode: carrierCode,
      photoUrl: `https://images.kiwi.com/airlines/64/${carrierCode}.png`
    }).catch(err => console.log("ERROR line 25", err))
  }
  companiesLocal[carrierCode] = company
  return company
}

async function lookupAirport(iataCode) {
  if (airportsLocal[iataCode]) {
    console.log(`grabbing airport ${iataCode} from local`)
    return airportsLocal[iataCode]
  }
  let airport = await Location.findOne({ airportCode: iataCode })
  if (!airport) {
    console.log("creating airport in DB")
    const { lon, lat, name } = airports[iataCode]
    airport = await Location.create({
      airportCode: iataCode,
      locType: "airport",
      name,
      lat,
      lng: lon
    }).catch(err => console.log("ERROR line 47", err))
  } else {
    console.log("airport found in DB", Date())
  }
  airportsLocal[iataCode] = airport
  return airport
}

const flightSearchResolver = {
  Query: {
    flightSearch: async (p, args, ctx) => {
      const response = parseResults(fakeResults)
      const firstOption = response.parsed[0]
      const firstItinerary = createItineraryFromOption(firstOption) // we'll return an array of these
      //
      const itineraries = response.parsed.map(opt =>
        createItineraryFromOption(firstOption)
      )
      return itineraries

      async function createRideFromSegment({ flightSegment }) {
        const { carrierCode, arrival, departure, number } = flightSegment
        const companyP = lookupCompany(carrierCode)
        const originP = lookupAirport(departure.iataCode)
        const destinationP = lookupAirport(arrival.iataCode)
        const [company, origin, destination] = await Promise.all([
          companyP,
          originP,
          destinationP
        ]).catch(err => console.log("ERROR line 73", err))
        const ride = {
          type: "flight",
          name: number,
          company,
          //   departureTime: departure.at,
          //   arrivalTime: arrival.at,
          //   lastUpdated: Date.now(),
          origin,
          destination
        }
        return ride
      }
      function createItineraryFromOption(option) {
        return {
          //         id: ID!,
          //         amadeusID: '1234',
          // name: String,
          price: option.price.total,
          // paymentMethod: String,
          // bookDate: DateTime,
          // confirmationNum: String,
          // priceQuotes: [PriceQuote],
          // travelers: [User!],
          rides: option.segments.map(
            async segment =>
              await createRideFromSegment(segment).catch(err =>
                console.log("ERROR line 101", err)
              )
          )
        }
      }
    }
  }
}

export default flightSearchResolver
