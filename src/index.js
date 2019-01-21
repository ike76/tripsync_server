import "dotenv/config"
import cors from "cors"
import express from "express"
import { ApolloServer } from "apollo-server-express"
import models from "./models"
import schemaArray from "./schema/schemas"
import resolvers from "./resolvers/resolvers"
import mongoose from "mongoose"

const app = express()
app.use(cors())

const server = new ApolloServer({
  typeDefs: schemaArray,
  resolvers,
  context: {
    models
  }
})

server.applyMiddleware({ app, path: "/graphql" })
mongoose
  .connect(
    `mongodb://${process.env.DB_USER}:${
      process.env.DB_PASSWORD
    }@ds259144.mlab.com:59144/stemfish`,
    { useNewUrlParser: true }
  )
  .then(response => {
    app.listen(4000, () => {
      console.log(
        `🐠  listening on http://localhost:4000${server.graphqlPath} 🐠`
      )
    })
  })

// app.listen(process.env.PORT, () => {
//   console.log("🚀  App listening on port ${process.env.PORT} 🚀")
// })
