import mongoose from "mongoose"
import bcrypt from "bcryptjs"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
//

const membershipSchema = new Schema({
  company: { type: ObjectId, ref: "Company" },
  memberNumber: String,
  status: String
})
const groupSchema = new Schema({
  title: { type: String, required: true },
  members: [{ type: ObjectId, ref: "User" }]
})

// info about subdocs:  https://mongoosejs.com/docs/subdocs.html

// const myLocSchema = new Schema({
//   location: { type: ObjectId, ref: "Location" },
//   notes: [String]
//   // whatever else about 'my' relationship to this location.
// })

export const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: String,
  phoneNumber2: String,
  password: {
    type: String,
    trim: true
  },
  userName: String,
  photoUrl: String,
  homeAddress: {
    street: String,
    cityState: String,
    lat: Number,
    lng: Number
  },
  memberships: [membershipSchema],
  adminGroups: [groupSchema],
  adminTravelers: [{ type: ObjectId, ref: "User" }],
  // adminAirports: [myLocSchema],
  adminLocs: [{ type: ObjectId, ref: "AdminLoc", unique: true }],
  freqAirports: [{ type: ObjectId, ref: "AdminLoc" }],
  authorizedAdmins: [{ type: ObjectId, ref: "User" }]
})

userSchema.pre("save", function(next) {
  const user = this
  if (!user.password) return next()
  bcrypt.hash(user.password, 10, function(err, hash) {
    if (err) {
      console.log(err)
      return next(err)
    }
    user.password = hash
    next()
  })
})

let User = mongoose.model("User", userSchema)
export default User

const adminLocSchema = new Schema({
  location: { type: ObjectId, ref: "Location" },
  notes: [String],
  // "use" is a checkbox.  do i USE this place?
  use: {
    type: Boolean,
    default: true
  },
  // TODO - list of times you've been here.  notes in visits?
  ownerAdmin: { type: ObjectId, ref: "User" },
  admins: [{ type: ObjectId, ref: "User" }]
})
export const AdminLoc = mongoose.model("AdminLoc", adminLocSchema)
