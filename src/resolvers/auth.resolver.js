import User from "../models/user.model"
// 👆 this should be unused . . use models from context.  just here for intellisense
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"

import { UserInputError, AuthenticationError } from "apollo-server-express"

const authResolver = {
  Query: {
    signIn: async (root, { email, password }, { models }) => {
      const user = await User.findOne({ email })
      if (!user)
        throw new UserInputError("nope", {
          email: "no user found with that email"
        })
      const passwordMatch = await bcrypt.compare(password, user.password)
      if (!passwordMatch)
        throw new UserInputError("nope", {
          password: "wrong password"
        })
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "24h"
      })
      return { jwt: token }
    },
    me: async (root, args, { models, me }) => {
      if (!me) throw new AuthenticationError("please sign in")
      return User.findById(me._id)
    }
  },
  Mutation: {
    signUp: async (root, { email, password, userHandle }, { models }) => {
      const oldUser = await User.findOne({ email })
      if (oldUser) throw new Error("that user already exists")
      const newUser = await User.create({ email, password, userHandle })
      const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
        expiresIn: "24h"
      })
      return { jwt: token }
    }
  }
}

export default authResolver
