import { gql } from "apollo-server-express"

// a flight search is for a single itinerary - or round trip.

const flightSearchSchema = gql`
  extend type Query {
    flightSearch(input: FlightSearchInput): [Itinerary]
    airportAutocomplete(searchText: String, limit: Int): [Airport]
  }
  type Airport {
    name: String
    airportCode: String
    city: String
    state: String
    country: String
    lat: String
    lng: String
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
