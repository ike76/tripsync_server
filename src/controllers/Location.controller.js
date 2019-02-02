import Location from "../models/location.model"
import npmAirports from "airports"
import chalk from "chalk"
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
