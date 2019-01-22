import userResolver from "./user.resolver"
import songResolver from "./song.resolver"

const baseResolver = {
  Mutation: {
    wipeData: async (_, { secretWord }, { models: { User, Song } }) => {
      console.log("wipe data")
      if (secretWord === process.env.SECRET_DELETE_WORD) {
        const { deletedCount: usersDeleted } = await User.deleteMany()
        const { deletedCount: songsDeleted } = await Song.deleteMany()
        console.log("usersDeleted", usersDeleted)
        console.log("songsDeleted", songsDeleted)
        return `users deleted: ${usersDeleted} // songs deleted: ${songsDeleted}`
      } else {
        return "no way jose"
      }
    }
  }
}

export default [baseResolver, userResolver, songResolver]
