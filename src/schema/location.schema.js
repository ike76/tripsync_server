import { gql } from "apollo-server-express"

const locationSchema = gql`
  type Location {
    id: ID!
    lat: Float
    lng: Float
    streetAddress: String
    city: String
    state: String
    country: String
    name: String
    nameShort: String
    airportCode: String
    locType: String
  }
  input LocInput {
    lat: Float
    lng: Float
    streetAddress: String
    city: String
    state: String
    country: String
    name: String
    nameShort: String
    locType: String
  }
  extend type Mutation {
    createLocation(input: LocInput): Location
    updateLocation(id: ID!, input: LocInput): Location
  }
  extend type Query {
    readLocations: [Location]
    getLocFromAirportCode(code: String!): Location
  }
`

export default locationSchema
