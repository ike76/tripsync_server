import mongoose, { Schema } from "mongoose"

const locationSchema = new Schema({
  lat: Number,
  lng: Number,
  streetAddress: String,
  city: String,
  state: String,
  country: String,
  name: String,
  nameShort: String,
  airportCode: { type: String, unique: true },
  locType: String
})

const Location = mongoose.model("Location", locationSchema)

export default Location
