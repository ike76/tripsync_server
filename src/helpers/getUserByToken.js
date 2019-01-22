import User from "../models/user.model"
import jwt from "jsonwebtoken"
import { AuthenticationError } from "apollo-server"
const getUserByToken = async token => {
  if (!token) return null
  try {
    const { userId, exp } = await jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(userId)
    if (!user) return null
    user.password = null
    return user
  } catch (error) {
    return null
  }
}

export default getUserByToken
