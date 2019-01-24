// import { createTestClient } from "apollo-server-testing"
// import { gql, ApolloServer } from "apollo-server-express"
// import schemaArray from "../schema/schemas"
// import resolvers from "../resolvers/resolvers"
// import models from "../models"
// import mongoose from "mongoose"
// //
// import { GET_ALL_USERS } from "./helpers/userQueries"
// describe("apollo test client", () => {
//   //
//   it("gets a result from a query", () => {
// //     const server = new ApolloServer({
// //       typeDefs: schemaArray,
// //       resolvers,
// //       context: async ({ req }) => {
// //         let me = { email: "a@a.com", userName: "buck rogers" }
// //         if (req) {
// //           const token = req.headers.authorization || ""
// //           me = (await getUserByToken(token)) || null
// //         }
// //         return { models, me }
// //       }
// //     })
// //     const { query } = createTestClient(server)
// //     return query({
// //       query: `mutation NEW_GUY($email: String! $password: String!){
// //         newGuy(email: $email password: $password){
// //           id
// //           email
// //         }
// //       }`,
// //       variables: { email: "new@guy.io", password: "powerpow" }
// //     })
// //       .then(res => {
// //         console.log("TEST RESPONSE", res)
// //       })
// //       .catch(err => console.log("TEST ERROR", err))
// //   })
// })
// }
