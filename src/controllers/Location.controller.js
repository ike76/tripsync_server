import Location from "../models/location.model"
import npmAirports from "airports"
import chalk from "chalk"
import {
  getAirportInfo,
  getParsedAirportInfo
} from "../amadeusAPI/amadeus_handler"

// this creates Locations from basic airport info.
// if these airports are used, they will get filled out by 'fillAirportDetails'
export async function findOrCreateAirports(codeArr) {
  const airports = await Promise.all(
    codeArr.map(async airportCode => {
      let foundAirport = await Location.findOne({ airportCode })
      if (foundAirport) console.log("found airport", chalk.green(foundAirport))
      if (!foundAirport) {
        const { lat, lon, name } = npmAirports.find(
          ap => ap.iata === airportCode
        )
        console.log("creating airport", chalk.blue(lat, lon, name))
        foundAirport = await Location.create({
          name,
          lat,
          lng: lon,
          locType: "airport",
          airportCode
        })
      }
      return foundAirport
    })
  )
  return airports
}

export async function fillAirportDetails(airportCode) {
  const location = await Location.findOne({ airportCode })
  console.log("location from fill out", location)
  if (location) {
    const { lat, lng, name, city, country } = location
    // already made, just return it.
    if (lat && lng && name && city && country) {
      console.log("already got that one", airportCode)
      return location
    }
  }

  // either update it or create a new one
  const updateObj = await getParsedAirportInfo(airportCode)
  return Location.findOneAndUpdate({ airportCode }, updateObj, {
    upsert: true,
    new: true
  })
}
