import mongoose, { Schema } from "mongoose"
const ObjectId = Schema.Types.ObjectId

const itinerarySchema = new Schema({
  name: String,
  price: Number,
  paymentMethod: String,
  bookDate: String,
  confirmationNum: String,
  priceQuotes: [{ type: ObjectId, ref: "PriceQuote" }],
  travelers: [{ type: ObjectId, ref: "User" }],
  rides: [{ type: ObjectId, ref: "Ride" }]
})

const priceQuoteSchema = new Schema({
  price: Number,
  foundDate: String,
  source: String
})

const Itinerary = mongoose.model("Itinerary", itinerarySchema)
const PriceQuote = mongoose.model("PriceQuote", priceQuoteSchema)
export default Itinerary
