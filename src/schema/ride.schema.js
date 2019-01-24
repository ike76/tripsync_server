import { gql } from "apollo-server-express"

const rideSchema = gql`
  type Ride {
    type: RideType!
    name: String
    company: Company
    departureTime: DateTime
    arrivalTime: DateTime
    lastUpdated: DateTime
    origin: Location
    destination: Location
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
