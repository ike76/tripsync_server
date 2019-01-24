import { gql } from "apollo-server-express"

const legSchema = gql`
  type Leg {
    startLoc: Location
    endLoc: Location
    startTime: DateTime
    endTime: DateTime
    itineraries: [Itinerary]
    flightOptionGroups: [FlightOptionGroup]
  }
  type FlightOptionGroup {
    travelers: [User]
    itineraries: [Itinerary]
    lastSelected: Itinerary
  }
`

export default legSchema
