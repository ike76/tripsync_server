import { gql } from "apollo-server-express"

const itinerarySchema = gql`
  extend type Mutation {
    createItinerary(name: String!): Itinerary
  }
  type Itinerary {
    id: ID
    amadeusID: ID
    saved: Boolean!
    name: String
    price: String
    paymentMethod: String
    bookDate: DateTime
    confirmationNum: String
    priceQuotes: [PriceQuote]
    travelers: [User!]
    rides: [Ride]
    returnRides: [Ride]
  }
  type DateTime {
    unix: Int!
  }
  type PriceQuote {
    price: Float!
    foundDate: DateTime
    source: String
  }
`

export default itinerarySchema
