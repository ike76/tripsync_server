import User, { AdminLoc } from "../models/user.model"
// 👆 this should be unused . . use models from context.  just here for intellisense
import mongoose from "mongoose"
const ObjectId = mongoose.Types.ObjectId

import { findOrCreateAirports } from "../controllers/Location.controller"
export const userResolver = {
  Query: {
    user: async (parent, { id }, { models: { User } }) => {
      return User.findById(id)
    },
    users: (_, __, { models }) => {
      return models.User.find({})
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
    createTraveler: async (root, args, { models, me }) => {
      const newUser = await User.create(args.input).catch(err =>
        console.log(err)
      )
      await User.findByIdAndUpdate(
        me._id,
        { $push: { adminTravelers: newUser._id } },
        { new: true }
      ).catch(err => {
        throw new Error(err.message)
      })
      return newUser
    },
    updateUser: async (root, { input, userId }, { me, models }) => {
      //TODO am i authorized to update this user?
      const { homeAirports: airportCodes } = input
      const homeAirportsFilled = await findOrCreateAirports(airportCodes)
      let updatedUser = await User.findByIdAndUpdate(
        userId,
        { ...input, homeAirports: homeAirportsFilled },
        { new: true }
      )
      return updatedUser
    },
    deleteUser: async (root, { id }) => {
      const response = await User.findByIdAndDelete(id)
      return !!response
    },
    updateMe: async (_, args, { models, me }) => {
      const updatedUser = await User.findByIdAndUpdate(me._id, args, {
        new: true
      })
      console.log(updatedUser)
      return updatedUser
    },
    updateAdminLoc: async (_, { input }, { models, me }) => {
      const { adminLocId, notes } = input
      // TODO check if I'm permitted to edit this adminLoc
      const updatedAdminLoc = AdminLoc.findByIdAndUpdate(
        adminLocId,
        {
          notes
        },
        { new: true }
      )
      return updatedAdminLoc
    }
  },
  User: {
    id: user => user._id,
    adminTravelers: async (user, args, { models, me }) => {
      const mePopulated = await User.findById(me._id).populate("adminTravelers")
      return mePopulated.adminTravelers
    },
    // adminAirports: async (user, __, { models, me }) => {
    //   const mePop = await User.findById(me._id).populate({
    //     path: "adminAirports"
    //   })
    //   console.log("mePop", mePop)
    //   return mePop.adminAirports
    // },
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
    homeAirports: async user => {
      const { homeAirports } = await User.findById(user.id).populate(
        "homeAirports"
      )
      return homeAirports
    }
  }
}
export default userResolver
