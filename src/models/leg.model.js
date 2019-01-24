import mongoose, { Schema } from "mongoose"
const ObjectId = Schema.Types.ObjectId

const legSchema = new Schema({
  startLoc: { type: ObjectId, ref: "Location" },
  endLoc: { type: ObjectId, ref: "Location" },
  startTime: String,
  endTime: String,
  itineraries: { type: ObjectId, ref: "Itinerary" }
})

const Leg = mongoose.model("Leg", legSchema)
export default Leg
