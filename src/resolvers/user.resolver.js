import User from "../models/user.model"
// 👆 this should be unused . . use models from context.  just here for intellisense

export const userResolver = {
  Query: {
    user: async (parent, { id }, { models: { User } }) => {
      return User.findById(id)
    },
    users: (_, __, { models }) => {
      return models.User.find({})
    }
  },
  Mutation: {},
  User: {
    id: user => user._id,
    songs: async (user, args, ctx) => {
      const { songs } = await User.findById(user.id).populate("songs")
      return songs
    }
  }
}

export default userResolver
