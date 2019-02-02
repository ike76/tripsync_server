import chalk from "chalk"
import mongoose from "mongoose"
const ObjectId = mongoose.Types.ObjectId
import moment from "moment"
import airports from "../amadeusAPI/airportsObject.json"
//
import { fakeResults } from "../amadeusAPI/testResponse"
import fakeResults2 from "../amadeusAPI/fakeResponse"
import {
  parseResults,
  getFlights,
  getAirportsAndAirlinesInfo
} from "../amadeusAPI/amadeus_handler"
import User from "../models/user.model"
import { addToMyAdminAirports } from "../controllers/User.controller"
import {
  createRideFromSegment,
  createItineraryFromOption
} from "./flightSearchHelpers"

const flightSearchResolver = {
  Airport: {
    lng: airport => airport.lon,
    airportCode: airport => airport.iata
  },
  Query: {
    airportAutocomplete: (_, { searchText, limit }) => {
      console.log("searchText", searchText)
      const searchUpC = searchText.toUpperCase()
      // find exact result first
      const exactResult = airports[searchUpC]
      // find other matches
      const searchFilter = new RegExp(searchText, "i")
      const otherAirports = Object.keys(airports)
        .filter(
          key => searchFilter.test(key) && airports[key].iata !== searchUpC
        )
        // sort ALPHABETIALLY
        .sort((keyA, keyB) =>
          airports[keyA].name < airports[keyB].name ? -1 : 1
        )
        // sort by AIRPORT SIZE - large or medium.  (smalls have been removed)
        .sort((keyA, keyB) => {
          const apA = airports[keyA]
          const apB = airports[keyB]
          if (apA.size === "large") {
            return apB.size === "large" ? 0 : -1
          }
          if (apB.size === "large") {
            return apA.size === "large" ? 0 : +1
          }
        })
        // only return the requested limit
        .slice(0, limit)
        .map(key => airports[key])

      const returnArr = [exactResult, ...otherAirports]
      return returnArr
    },
    flightSearch: async (p, { input }, { models, me }) => {
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
      if (me) {
        // add airports to 'my airports'
        console.log(chalk.blue("updating my airports"))
        await addToMyAdminAirports({ me, airports })
      } else {
        console.log("there is no me")
      }
      return itineraries
    }
  }
}

export default flightSearchResolver
