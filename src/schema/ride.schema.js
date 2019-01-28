import { gql } from "apollo-server-express"

const rideSchema = gql`
  type Ride {
    type: RideType!
    name: String
    company: Company
    departureTime: String
    arrivalTime: String
    lastUpdated: String
    origin: Location
    destination: Location
    duration: String
  }
  enum RideType {
    FLIGHT
    CAR
    TAXI
    UBER
    LYFT
    BUS
    SHUTTLE
    TRAIN
    BOAT
    WALK
  }
`

export default rideSchema
