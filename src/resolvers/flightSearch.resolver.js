import chalk from "chalk"
import mongoose from "mongoose"
const ObjectId = mongoose.Types.ObjectId
import moment from "moment"
//
import { fakeResults } from "../amadeusAPI/testResponse"
import fakeResults2 from "../amadeusAPI/fakeResponse"
import {
  parseResults,
  getFlights,
  getAirportsAndAirlinesInfo
} from "../amadeusAPI/amadeus_handler"
import User from "../models/user.model"
import {
  createRideFromSegment,
  createItineraryFromOption
} from "./flightSearchHelpers"

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
      const useRealCall = false
      // turn this 👆 on to call 👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆👆

      const departDateF =
        departDate && moment(Number(departDate)).format("YYYY-MM-DD")
      const returnDateF =
        returnDate && moment(Number(returnDate)).format("YYYY-MM-DD")
      console.log(chalk.red(origin, destination, departDateF, returnDateF))

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
      //
      const travelers = await User.find({
        _id: { $in: travelerIds.map(tid => ObjectId(tid)) }
      })
      const { parsed, airlines, airports } = await parseResults(results)
      const itineraries = parsed.map(option =>
        createItineraryFromOption({ option, travelers, airlines, airports })
      )

      return itineraries
    }
  }
}

export default flightSearchResolver
