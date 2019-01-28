import chalk from "chalk"
import mongoose from "mongoose"
const ObjectId = mongoose.Types.ObjectId
//
import { fakeResults } from "../amadeusAPI/testResponse"
import fakeResults2 from "../amadeusAPI/fakeResponse"
import {
  parseResults,
  getFlights,
  getAirportsFromResults
} from "../amadeusAPI/amadeus_handler"
import moment from "moment"
import User from "../models/user.model"

const flightSearchResolver = {
  Query: {
    flightSearch: async (p, { input }, ctx) => {
      const {
        origin,
        destination,
        departDate,
        returnDate,
        currency,
        travelerIds
      } = input
      // 👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇👇
      const useRealCall = true
      // turn this 👆 on to call 👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆

      const departDateF =
        departDate && moment(Number(departDate)).format("YYYY-MM-DD")
      const returnDateF =
        returnDate && moment(Number(returnDate)).format("YYYY-MM-DD")
      console.log(
        "info for search",
        chalk.red(origin, destination, departDateF, returnDateF)
      )
      let results
      if (useRealCall) {
        results = await getFlights({
          origin,
          destination,
          departureDate: departDateF,
          returnDate: returnDateF,
          currency
        })
      } else {
        results = fakeResults2
      }
      const [airlines, airports] = await getAirportsFromResults(results)

      const travelers = await User.find({
        _id: { $in: travelerIds.map(tid => ObjectId(tid)) }
      })

      const response = parseResults(results)
      const itineraries = response.parsed.map(option =>
        createItineraryFromOption(option)
      )

      return itineraries

      function createRideFromSegment(segment) {
        const {
          carrierCode,
          arrival,
          departure,
          number,
          duration
        } = segment.flightSegment
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
          destination,
          duration
        }
        return ride
      }
      function createItineraryFromOption(option) {
        const ridesArr = option.segments.map(segments => {
          return segments.map(segment => createRideFromSegment(segment))
        })
        return {
          amadeusID: option.id,
          price: option.price.total,
          taxes: option.price,
          travelers,
          rides: ridesArr[0],
          returnRides: ridesArr[1] // rides is an array now
        }
      }
    }
  }
}

export default flightSearchResolver
