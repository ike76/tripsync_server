import userResolver from "./user.resolver"
import testResolver from "./test.resolver"
import authResolver from "./auth.resolver"
import flightOGResolver from "./flightOG.resolver"
import itineraryResolver from "./itinerary.resolver"
const baseResolver = {
  Mutation: {
    wipeData: async (_, { secretWord }, { models: { User } }) => {
      console.log("wipe data")
      if (secretWord === process.env.SECRET_DELETE_WORD) {
        const { deletedCount: usersDeleted } = await User.deleteMany()
        console.log("usersDeleted", usersDeleted)
        return `users deleted: ${usersDeleted} // `
      } else {
        return "no way jose"
      }
    }
  }
}

export default [
  baseResolver,
  userResolver,
  testResolver,
  authResolver,
  flightOGResolver,
  itineraryResolver
]
