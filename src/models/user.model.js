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
  password: {
    type: String,
    required: true,
    trim: true
  },
  userName: String,
  photoUrl: String,
  memberships: [membershipSchema],
  adminGroups: [groupSchema],
  adminTravelers: [{ type: ObjectId, ref: "User" }],
  // adminAirports: [myLocSchema],
  adminLocs: [{ type: ObjectId, ref: "AdminLoc" }],
  homeAirports: [{ type: ObjectId, ref: "Location" }],
  authorizedAdmins: [{ type: ObjectId, ref: "User" }]
})

userSchema.pre("save", function(next) {
  const user = this
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
  admins: [{ type: ObjectId, ref: "User" }]
})
export const AdminLoc = mongoose.model("AdminLoc", adminLocSchema)
