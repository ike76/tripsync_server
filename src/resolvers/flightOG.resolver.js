import FlightOG, { FlightOGMember } from "../models/flightOptionGroup.model"

import mongoose from "mongoose"
import Itinerary from "../models/itinerary.model"
const ObjectId = mongoose.Types.ObjectId
const flightOGResolver = {
  Mutation: {
    createFlightOG: async (p, { members }, ctx) => {
      const arrayOfOGMembers = members.map(userID => {
        return FlightOGMember.create({ traveler: ObjectId(userID) })
      })
      const resolvedMembers = await Promise.all(arrayOfOGMembers)
      const newFlightOG = new FlightOG({ members: resolvedMembers })
      return newFlightOG.save()
    },
    addItineraryToFOGMember: async (p, args, ctx) => {
      const { fogmID, itinerary } = args
      const newItinerary = await Itinerary.create(itinerary)
      const flightOGM = await FlightOGMember.findByIdAndUpdate(
        fogmID,
        {
          $push: { itineraries: newItinerary }
        },
        { new: true }
      )
      return flightOGM
    },
    removeItineraryFromFOGMember: async (p, { itineraryID, fogmID }, ctx) => {
      const updatedFogm = await FlightOGMember.findByIdAndUpdate(
        fogmID,
        {
          $pull: { itineraries: itineraryID }
        },
        { new: true }
      )
      // if latest selected, make the other one latest selected,  or null it.
      return updatedFogm
    },
    setLastSelectedItinerary: async (_, { itineraryID, fogmID }, ctx) => {
      const itinerary = await Itinerary.findById(itineraryID)
      const fogm = await FlightOGMember.findById(fogmID)
      if (!fogm.itineraries.find(id => id == itineraryID)) {
        throw new Error("itinerary not found in that option set")
      }
      fogm.lastSelectedItinerary = ObjectId(itineraryID)
      await fogm.save()
      return itinerary
    }
  },
  Query: {
    flightOGs: async (p, args, ctx) => {
      const fogs = await FlightOG.find()
      return fogs
    },
    flightOGM: async (p, { fogmID }) => {
      console.log("fogmID", fogmID)
    }
  },
  FlightOG: {
    members: async fog => {
      const { members } = await FlightOG.findOne({ _id: fog._id })
        .populate({
          path: "members",
          populate: { path: "traveler" }
          // TODO populate itineraries when avail
        })
        .populate({
          path: "members",
          populate: { path: "itineraries" }
        })
      return members
    },
    id: fog => fog._id
  },
  FlightOGMember: {
    id: fogm => fogm._id,
    itineraries: async (fogm, args, ctx) => {
      const { itineraries } = await FlightOGMember.findById(fogm._id).populate(
        "itineraries"
      )
      return itineraries
    },
    traveler: async (fogm, args, ctx) => {
      const { traveler } = await FlightOGMember.findById(fogm._id).populate(
        "traveler"
      )
      return traveler
    },
    lastSelectedItinerary: async (fogm, args, ctx) => {}
  }
}

export default flightOGResolver
