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
  Mutation: {
    createUser: async (root, args, ctx) => {
      return User.create(args)
    },
    deleteUser: async (root, { id }) => {
      const response = await User.findByIdAndDelete(id)
      return !!response
    }
    // deleteAllUsers: async (root, { secretWord }) => {
    //   if (secretWord === process.env.SECRET_DELETE_WORD) {
    //     const { deletedCount } = await User.deleteMany()
    //     return `users deleted: ${deletedCount}`
    //   } else {
    //     return "no way jose"
    //   }
    // }
  },
  User: {
    id: user => user._id,
    songs: async (user, args, { models: { User } }) => {
      const { songs } = await User.findById(user.id).populate("songs")
      return songs
    }
  }
}

export default userResolver
