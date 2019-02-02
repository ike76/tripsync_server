import Location from "../models/location.model"
import User from "../models/user.model"
import airports from "../amadeusAPI/filteredAirports.json"
const locationResolver = {
  Mutation: {
    createLocation: async (p, { input }, ctx) => {
      const inputDisplay = JSON.stringify(input)
      console.log("addLocation", inputDisplay)
      const newLoc = await Location.create(input)
      console.log("newLoc", newLoc)
      return newLoc
    },
    updateLocation: async (p, { input, id }, ctx) => {
      console.log("updateLocation", input)
      console.log("updateLocation", id)
      const updatedLoc = await Location.findByIdAndUpdate(id, input, {
        new: true
      })
      return updatedLoc
    }
  },
  Location: {
    id: loc => loc._id
  },
  Query: {
    readLocations: (_, args, ctx) => {
      return Location.find()
    },
    getLocFromAirportCode: async (p, { code }, ctx) => {
      let airport = await Location.findOne({ airportCode: code })
      if (!airport && airports[code]) {
        let { lon, name, lat } = airports[code]
        airport = await Location.create({
          airportCode: code,
          lat,
          lng: lon,
          name: name,
          locType: "airport"
        })
      } else {
        console.log("couldnt find that one")
      }
      return airport
    }
  }
}

// call google to get lat and long if they aren't supplied / avail
// get google id and make unique ?

export default locationResolver
