import chalk from "chalk"
import { fakeResults } from "../amadeusAPI/testResponse"
import {
  parseResults,
  getAirlineInfo,
  getFlights,
  getAirportsFromResults
} from "../amadeusAPI/amadeus_handler"
import Company from "../models/company.model"
import Location from "../models/location.model"
import npmAirports from "airports"
import moment from "moment"

// async function lookupCompany(carrierCode) {
//   //   if (companiesLocal[carrierCode]) {
//   //     console.log(`grabbing airline ${carrierCode} from local`)
//   //     return companiesLocal[carrierCode]
//   //   }
//   if (!carrierCode) console.log(chalk.red("no carrier Code!!"))
//   let company = await Company.findOne({
//     airlineCode: carrierCode
//   }).catch(err => console.log("ERROR line 14", err))
//   if (!!company) {
//     console.log(chalk.blue(`company ${carrierCode} found in DB`), Date.now())
//   } else {
//     console.log(chalk.red("creating company"))
//     const { data } = await getAirlineInfo(carrierCode)
//     company = await Company.create({
//       name: data.businessName,
//       nameShort: data.commonName,
//       airlineCode: carrierCode,
//       photoUrl: `https://images.kiwi.com/airlines/64/${carrierCode}.png`
//     }).catch(err => console.log("ERROR line 25", err))
//   }
//   companiesLocal[carrierCode] = company
//   return company
// }

// async function lookupAirport(iataCode) {
//   if (airportsLocal[iataCode]) {
//     console.log(`grabbing airport ${iataCode} from local`)
//     return airportsLocal[iataCode]
//   }
//   let airport = await Location.findOne({ airportCode: iataCode })
//   if (!airport) {
//     console.log(chalk.red(`creating airport ${iataCode} in DB`))
//     const { lat, lon, name } = npmAirports.find(ap => ap.iata === iataCode)
//     console.log("lat lng name", lat, lon, name)
//     airport = await Location.create({
//       airportCode: iataCode,
//       locType: "airport",
//       name,
//       lat,
//       lng: lon
//     }).catch(err => console.log("ERROR line 47", err))
//   } else {
//     console.log(chalk.green(`airport ${iataCode} found in DB`), Date.now())
//   }
//   //   console.log(chalk.bgBlue(airportsLocal[iataCode]))
//   airportsLocal[iataCode] = airport
//   //   console.log(chalk.bgCyan(airportsLocal[iataCode]))
//   return airport
// }

const flightSearchResolver = {
  Query: {
    flightSearch: async (p, { input }, ctx) => {
      const { origin, destination, departDate, returnDate, currency } = input
      // format dates for search

      const departDateF =
        departDate && moment(Number(departDate)).format("YYYY-MM-DD")
      const returnDateF =
        returnDate && moment(Number(returnDate)).format("YYYY-MM-DD")
      console.log(
        "info for search",
        chalk.red(origin, destination, departDateF, returnDateF, currency)
      )
      const rawResults = await getFlights({
        origin,
        destination,
        departureDate: departDateF,
        returnDate: returnDateF,
        currency
      })
      const [airlines, airports] = await getAirportsFromResults(rawResults)
      console.log("airlines", airlines)
      console.log("airports", airports)
      const response = parseResults(rawResults)
      const itineraries = response.parsed.map(opt =>
        createItineraryFromOption(opt)
      )
      return itineraries
      function createRideFromSegment({ flightSegment }) {
        const { carrierCode, arrival, departure, number } = flightSegment
        const origin = airports.find(
          ap => ap.airportCode === departure.iataCode
        )
        const destination = airports.find(
          ap => ap.airportCode === arrival.iataCode
        )
        const company = airlines.find(al => al.airlineCode === carrierCode)
        const ride = {
          type: "flight",
          name: number,
          company,
          departureTime: departure.at,
          arrivalTime: arrival.at,
          lastUpdated: Date.now(),
          origin,
          destination
        }
        return ride
      }
      function createItineraryFromOption(option) {
        const rides = option.segments.map(segment =>
          createRideFromSegment(segment)
        )
        return {
          //         id: ID!,
          amadeusID: "1234",
          // name: String,
          price: option.price.total,
          // paymentMethod: String,
          // bookDate: DateTime,
          // confirmationNum: String,
          // priceQuotes: [PriceQuote],
          // travelers: [User!],
          rides
        }
      }
    }
  }
}

export default flightSearchResolver
