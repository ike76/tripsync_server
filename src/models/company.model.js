import mongoose, { Schema } from "mongoose"

const companySchema = new Schema({
  name: String,
  name2: String,
  iata: String,
  icao: String,
  country: String,
  airlineCode: String
})

const Company = mongoose.model("Company", companySchema)

export default Company
