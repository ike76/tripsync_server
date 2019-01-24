import mongoose, { Schema } from "mongoose"

const ObjectId = Schema.Types.ObjectId

// each FOGMember has 0 or more itineraries, booked or unbooked
const flightOGMemberSchema = new Schema({
  traveler: { type: ObjectId, ref: "User" },
  itineraries: [{ type: ObjectId, ref: "Itinerary" }],
  lastSelectedItinerary: { type: ObjectId, ref: "Itinerary" }
})
// FlightOptionGroup is a collection of FOGMembers
const flightOGSchema = new Schema({
  members: [{ type: ObjectId, ref: "FlightOGMember" }]
})

const FlightOG = mongoose.model("FlightOG", flightOGSchema)

export const FlightOGMember = mongoose.model(
  "FlightOGMember",
  flightOGMemberSchema
)
export default FlightOG
