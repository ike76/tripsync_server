import mongoose, { Schema } from "mongoose"

const companySchema = new Schema({
  name: String,
  nameShort: String,
  photoUrl: String,
  airlineCode: String
})

const Company = mongoose.model("Company", companySchema)

export default Company
