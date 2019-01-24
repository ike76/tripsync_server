import { gql } from "apollo-server-express"

const flightOGSchema = gql`
  extend type Query {
    # flight option groups should eventually be accesbile thru their LEG.  not on their own
    flightOGs: [FlightOG]
    flightOGM(fogmID: ID!): FlightOGMember
  }
  extend type Mutation {
    # when you hit save on a group of flights, you create a FlightOG
    createFlightOG(members: [ID]): FlightOG
    addItineraryToFOGMember(itinerary: ItineraryInput!, fogmID: ID!): Itinerary
    removeItineraryFromFOGMember(itineraryID: ID!, fogmID: ID!): FlightOGMember
    setLastSelectedItinerary(itineraryID: ID!, fogmID: ID!): Itinerary
  }
  type FlightOG {
    id: ID!
    members: [FlightOGMember]
  }
  type FlightOGMember {
    id: ID!
    traveler: User!
    itineraries: [Itinerary!]
    lastSelectedItinerary: Itinerary
  }
  input ItineraryInput {
    name: String
  }
`

export default flightOGSchema
