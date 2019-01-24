import User from "../models/user.model"
// 👆 this should be unused . . use models from context.  just here for intellisense
import jwt from "jsonwebtoken"

export const userResolver = {
  Query: {
    user: async (parent, { id }, { models: { User } }) => {
      return User.findById(id)
    },
    users: (_, __, { models }) => {
      return models.User.find({})
    }
  },
  Mutation: {
    createUser: async (root, args, ctx) => {
      return User.create(args)
    },
    deleteUser: async (root, { id }) => {
      const response = await User.findByIdAndDelete(id)
      return !!response
    },
    updateMe: async (_, args, { models, me }) => {
      console.log("me", me)
      const updatedUser = await User.findByIdAndUpdate(me._id, args, {
        new: true
      })
      console.log(updatedUser)
      return updatedUser
    }
  },
  User: {
    id: user => user._id
  }
}

export default userResolver
