import User, { AdminLoc } from "../models/user.model"
import chalk from "chalk"

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

export async function upsertToMyAdminAirports({ me, airports }) {}
