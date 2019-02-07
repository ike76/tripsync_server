import User, { AdminLoc } from "../models/user.model"
// 👆 this should be unused . . use models from context.  just here for intellisense
import mongoose from "mongoose"
const ObjectId = mongoose.Types.ObjectId

import {
  findOrCreateAirports,
  fillAirportDetails
} from "../controllers/Location.controller"
import Location from "../models/location.model"
import { updateUserAirports } from "../controllers/User.controller"
import { AuthenticationError } from "apollo-server"
export const userResolver = {
  Query: {
    user: async (parent, { id }, { models: { User } }) => {
      return User.findById(id)
    },
    users: (_, { userIds }, { models }) => {
      // return a list of users
      return User.find({
        _id: { $in: userIds }
      })
    },
    getAdminLocsFromAirportCodes: async (
      _,
      { airportCode },
      { models, me }
    ) => {
      console.log(`looking for airport ${airportCode}`)
      //  see if there is a location in db already.
      let location = await Location.findOne({ airportCode })
      if (!location) {
      }
      if (location) {
        let adminLoc = await AdminLoc.findOne({ location })
        if (adminLoc) {
          return adminLoc
        } else {
          adminLoc = await AdminLoc.create({ location })
        }
      } else {
      }
      // if so, is there an adminLoc?   if so return adminLoc
      // if not, create location
    }
  },
  Mutation: {
    createUser: async (root, args, { models, me }) => {
      return User.create(args.input)
    },
    addTraveler: async (root, { userId }, { models, me }) => {
      const traveler = await User.findById(userId)
      if (!traveler) throw new Error("no user found by that id")
      const newMe = await User.findByIdAndUpdate(
        me._id,
        { $push: { adminTravelers: traveler } },
        { new: true }
      )
      return newMe
    },
    createTraveler: async (
      root,
      { input, homeAddressInput },
      { models, me }
    ) => {
      // TODO. make sure that 'me' is authorized to be an admin for this person.
      // if not, send a response that says click here to send them a note and be authorized. etc.
      const newUser = await User.findOneAndUpdate(
        { email: input.email },
        {
          ...input,
          homeAddress: homeAddressInput
        },
        {
          upsert: true,
          new: true
        }
      ).catch(err => console.log(err))

      await User.findByIdAndUpdate(
        me._id,
        { $addToSet: { adminTravelers: newUser } },
        { new: true }
      ).catch(err => {
        throw new Error(err.message)
      })
      return newUser
    },
    updateUser: async (
      root,
      { input, homeAddressInput, userId },
      { me, models }
    ) => {
      //TODO am i authorized to update this user?
      console.log("update User input", input)
      console.log("update User HomeAddyInput", homeAddressInput)
      const oldUser = await User.findById(userId)
      const freqAirports = await updateUserAirports({
        oldUser,
        newAddress: homeAddressInput
      })

      const updateObj = {
        ...input,
        homeAddress: homeAddressInput,
        freqAirports
      }
      let updatedUser = await User.findByIdAndUpdate(userId, updateObj, {
        new: true
      })
      return updatedUser
    },
    deleteUser: async (root, { userId }, { me }) => {
      if (!me) throw new AuthenticationError("you must be signed in")
      const response = await User.findByIdAndDelete(userId)
      const upDateMe = await User.findByIdAndUpdate(me._id, {
        $pull: { adminTravelers: { _id: userId } }
      })
      console.log("response", response)
      console.log("upDateMe", upDateMe)
      return userId
    },
    updateMe: async (_, args, { models, me }) => {
      const updatedUser = await User.findByIdAndUpdate(me._id, args, {
        new: true
      })
      console.log(updatedUser)
      return updatedUser
    },
    updateAdminLoc: async (_, { input }, { models, me }) => {
      console.log("input", input)
      const { adminLocId, ...updateObj } = input
      // TODO check if I'm permitted to edit this adminLoc
      const updatedAdminLoc = AdminLoc.findByIdAndUpdate(
        adminLocId,
        updateObj,
        { new: true }
      )
      // await new Promise((resolve, reject) => {
      //   setTimeout(() => {
      //     resolve()
      //   }, 2000)
      // })
      return updatedAdminLoc
    },
    addFreqAirport: async (_, { userId, airportCode }, { models, me }) => {
      console.log("userId, airportcode", userId, airportCode)
      const location = await fillAirportDetails(airportCode)
      const newAdminLoc = await AdminLoc.findOneAndUpdate(
        {
          ownerAdmin: ObjectId(userId),
          location: location
        },
        {
          ownerAdmin: ObjectId(userId),
          location: ObjectId(location._id),
          use: true
        },
        { upsert: true, new: true }
      ).populate("location")
      const newUser = await User.findByIdAndUpdate(userId, {
        $push: { freqAirports: newAdminLoc }
      })
      return newAdminLoc
    },
    removeFreqAirport: async (_, { adminLocId, userId }, ctx) => {
      console.log("adminLoc ID", adminLocId)
      console.log("userId", userId)
      // remove adminLoc from freqAirports
      const updatedUser = await User.findByIdAndUpdate(userId, {
        $pull: { freqAirports: adminLocId }
      })
      return "return from remove freq airport"
      // delete adminLoc
    }
  },
  User: {
    id: user => user._id,
    adminTravelers: async (user, args, { models, me }) => {
      const mePopulated = await User.findById(me._id).populate("adminTravelers")
      return mePopulated.adminTravelers
    },
    adminLocs: async (user, { limit }) => {
      const userInst = await User.findById(user._id).populate({
        path: "adminLocs",
        options: { limit },
        populate: {
          path: "location"
        }
      })
      return userInst.adminLocs
    },
    freqAirports: async user => {
      const { freqAirports } = await User.findById(user.id).populate({
        path: "freqAirports",
        populate: { path: "location" }
      })
      return freqAirports
    }
  }
}
export default userResolver
