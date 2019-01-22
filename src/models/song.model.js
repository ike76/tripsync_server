import mongoose from "mongoose"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

export const songSchema = new mongoose.Schema({
  title: String,
  bpm: Number,
  style: [String],
  admin: { type: ObjectId, ref: "User" }
})

const Song = mongoose.model("Song", songSchema)

export default Song
