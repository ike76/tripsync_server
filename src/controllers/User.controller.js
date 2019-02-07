import User, { AdminLoc } from "../models/user.model"
import Location from "../models/location.model"
import chalk from "chalk"
import {
  getNearbyAirports,
  parseAmadeusAirportObj
} from "../amadeusAPI/amadeus_handler"
import mongoose from "mongoose"
function blue(...input) {
  console.log(chalk.blue(...input))
}
function green(...input) {
  console.log(chalk.green(...input))
}

const ObjectId = mongoose.Types.ObjectId

export async function addToMyAdminAirports({ me, airports }) {
  const meInstance = await User.findById(me._id).populate("adminLocs")
  const adminLocs = meInstance.adminLocs || []
  const airportsIHaventTouched = airports.filter(ap => {
    const airportId = ap._id
    const beenThereBefore = adminLocs.find(adminLoc => {
      return adminLoc.location.toString() == airportId
    })
    return !beenThereBefore
  })
  if (airportsIHaventTouched.length) {
    // add them to my adminAirports
    const newAdminLocs = await Promise.all(
      airportsIHaventTouched.map(ap => {
        return AdminLoc.create({
          notes: [],
          location: ObjectId(ap._id),
          admins: [meInstance]
        })
      })
    )
    await User.findByIdAndUpdate(me._id, {
      $push: {
        adminLocs: {
          $each: newAdminLocs
        }
      }
    })
  }
}

export async function updateUserAirports({ oldUser, newAddress }) {
  if (
    newAddress &&
    (oldUser.homeAddress.lat !== newAddress.lat ||
      oldUser.homeAddress.lng !== newAddress.lng)
  ) {
    try {
      blue("changing home airports . . .")
      const airports = await getNearbyAirports({
        lat: newAddress.lat,
        lng: newAddress.lng,
        fake: false
      }).then(({ result }) => result.data)
      // find or create Locations in db for each airport, up to 5
      const locations = await Promise.all(
        airports.slice(0, 3).map(async apObj => {
          const updateObj = parseAmadeusAirportObj(apObj)
          const location = await Location.findOneAndUpdate(
            { airportCode: updateObj.airportCode },
            updateObj,
            {
              new: true,
              upsert: true
            }
          )
          return { locId: location._id, distanceFromHome: apObj.distance.value }
        })
      )
      const localAirports = await Promise.all(
        locations.map(({ locId, distanceFromHome }) => {
          return AdminLoc.findOneAndUpdate(
            { location: ObjectId(locId), ownerAdmin: ObjectId(oldUser._id) },
            {
              location: locId,
              notes: [],
              use: true,
              ownerAdmin: ObjectId(oldUser._id)
            },
            { upsert: true, new: true }
          )
        })
      )
      // updated freqAirports
      console.log("oldUser in local airports", oldUser)
      blue("locals", localAirports.map(ap => ap._id))
      green("old", oldUser.freqAirports.map(ap => ap._id))
      const uniqueObj = [...oldUser.freqAirports, ...localAirports].reduce(
        (obj, ap) => {
          obj[ap._id] = ap
          return obj
        },
        {}
      )
      return Object.values(uniqueObj)
    } catch (error) {
      console.log("error!", error)
      return oldUser.freqAirports
    }
    // add each location to this user.freqAirports
  } else {
    console.log("not changing airports")
    return oldUser.freqAirports
  }
}
