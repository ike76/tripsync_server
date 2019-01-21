import "dotenv/config"
import cors from "cors"
import express from "express"
import { ApolloServer } from "apollo-server-express"
import models, { sequelize } from "./models"
import schemaArray from "./schema/schemas"
import resolvers from "./resolvers/resolvers"
const app = express()
app.use(cors())

const server = new ApolloServer({
  typeDefs: schemaArray,
  resolvers,
  context: {
    // me: models.fakeUsers["brian_e_id"],
    models
  }
})

server.applyMiddleware({ app, path: "/graphql" })
sequelize.sync().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("🚀  App listening on port ${process.env.PORT} 🚀")
  })
})
