import Song from "../models/song.model"
import User from "../models/user.model"
// 👆 this should be unused . . use models from context.  just here for intellisense

const songResolver = {
  Query: {
    songs: (_, __, { models: { Song } }) => {
      return Song.find({})
    },
    song: (_, { id }, { models: { Song } }) => {
      return Song.findById(id)
    }
  },
  Mutation: {
    createSong: async (p, args, { models: { Song } }) => {
      const { adminId, ...songProps } = args
      const newSong = await Song.create({ ...songProps, admin: adminId })
      const user = await User.findByIdAndUpdate(
        adminId,
        { $push: { songs: newSong._id } },
        { new: true }
      )
      return newSong
    }
  },
  Song: {
    id: song => song._id,
    admin: async (song, _, { models: { Song } }) => {
      const { admin } = await Song.findById(song.id).populate("admin")
      return admin
    }
  }
}

export default songResolver
