import Song from "../models/song.model"
import User from "../models/user.model"
import { AuthenticationError } from "apollo-server"
// 👆 this should be unused . . use models from context.  just here for intellisense

const songResolver = {
  Query: {
    songs: (_, __, { models: { Song } }) => {
      return Song.find({})
    },
    song: (_, { id }, { models: { Song } }) => {
      return Song.findById(id)
    },
    mySongs: async (_, __, { models, me }) => {
      if (!me)
        return new AuthenticationError("must be logged in to retrieve songs")
      const { songs } = await User.findById(me._id).populate("songs")
      return songs
    }
  },
  Mutation: {
    createSong: async (p, args, { models, me }) => {
      if (!me)
        return new AuthenticationError("must be logged in to create a song")
      const songProps = args
      const newSong = await models.Song.create({ ...songProps, admin: me._id })
      const user = await User.findByIdAndUpdate(
        me._id,
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
