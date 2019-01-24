import { gql } from "apollo-server-express"
import userSchema from "./user.schema"
import locationSchema from "./location.schema"
import itinerarySchema from "./itinerary.schema"
import legSchema from "./leg.schema"
import rideSchema from "./ride.schema"
import testSchema from "./test.schema"
import authSchema from "./auth.schema.js"
import flightOGSchema from "./flightOG.schema"
const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
    wipeData(secretWord: String!): String
  }
  type Subscription {
    _: Boolean
  }
`

export default [
  linkSchema,
  userSchema,
  locationSchema,
  itinerarySchema,
  legSchema,
  rideSchema,
  testSchema,
  authSchema,
  flightOGSchema
]
