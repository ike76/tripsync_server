import { gql } from "apollo-server-express"

// a flight search is for a single itinerary - or round trip.

const flightSearchSchema = gql`
  extend type Query {
    flightSearch(input: FlightSearchInput): [Itinerary]
  }

  input FlightSearchInput {
    travelerIds: [ID!]!
    origin: String!
    destination: String!
    departDate: String
    returnDate: String
    oneWay: Boolean
    currency: String
  }
`

export default flightSearchSchema
