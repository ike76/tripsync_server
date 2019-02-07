import "dotenv/config"
import cors from "cors"
import express from "express"
import { ApolloServer } from "apollo-server-express"
import models from "./models"
import schemaArray from "./schema/schemas"
import resolvers from "./resolvers/resolvers"
import mongoose from "mongoose"
import getUserByToken from "./helpers/getUserByToken"
import chalk from "chalk"
const app = express()
app.use(cors())

const server = new ApolloServer({
  typeDefs: schemaArray,
  resolvers,
  context: async ({ req }) => {
    const authToken = req.headers.authorization || ""
    const refreshToken = req.headers.refresh || ""
    const me = (await getUserByToken(authToken, refreshToken)) || null
    return { models, me }
  }
})

server.applyMiddleware({ app, path: "/graphql" })

const { DEV_PORT, TEST_PORT } = process.env
const PORT = process.env.TEST_DB ? TEST_PORT : DEV_PORT

mongoose
  .connect(process.env.TEST_DB || process.env.PROD_DB, {
    useNewUrlParser: true,
    useFindAndModify: false
  })
  .then(response => {
    app.listen(PORT, () => {
      const message = !!process.env.TEST_DB
        ? `🧪 🧪 🧪  Test-server listening on ${PORT} 🧪 🧪 🧪`
        : ` ✈️  🚌  🚕  🛩️  listening on http://localhost:${PORT}${
            server.graphqlPath
          } ✈️  🚌  🚕  🛩️`
      console.log(message)
    })

    return response
  })

// app.listen(process.env.PORT, () => {
//   console.log("🚀  App listening on port ${process.env.PORT} 🚀")
// })
