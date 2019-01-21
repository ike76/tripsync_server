import mongoose from "mongoose"
import bcrypt from "bcryptjs"
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
//

const userSchema = new Schema({
  firstName: String,
  lastName: String,
  rating: Number,
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
  userHandle: String,
  photoUrl: String,
  propsals: [{ type: ObjectId, ref: "Proposal" }],
  stems: [{ type: ObjectId, ref: "Stem" }],
  songs: [{ type: ObjectId, ref: "Song" }],
  permissions: [String]
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

const User = mongoose.model("User", userSchema)

export default User
