import { gql } from "apollo-server-express"

const userSchema = gql`
  extend type Query {
    # me: User
    user(id: ID!): User
    users(userIds: [ID!]): [User!]
    getAdminLocsFromAirportCodes(airportCodes: [String!]): [AdminLoc]
  }
  extend type Mutation {
    # add traveler that already existed before
    addTraveler(userId: ID!): User
    # create new traveler and add to my list
    createTraveler(input: UserInput, homeAddressInput: HomeAddressInput): User
    updateUser(
      input: UserInput
      homeAddressInput: HomeAddressInput
      userId: ID!
    ): User
    deleteUser(userId: ID!): ID
    updateMe(
      firstName: String
      lastName: String
      email: String
      userName: String
      photoUrl: String
    ): User
    updateAdminLoc(input: AdminLocInput!): AdminLoc
    addFreqAirport(userId: ID!, airportCode: String!): AdminLoc
    removeFreqAirport(adminLocId: ID!, userId: ID!): String
  }

  input UserInput {
    firstName: String
    lastName: String
    email: String
    password: String
    userName: String
    photoUrl: String
    phoneNumber: String
    phoneNumber2: String
  }
  input HomeAddressInput {
    street: String
    lat: Float
    lng: Float
  }
  type HomeAddress {
    street: String
    cityState: String
    lat: Float
    lng: Float
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String!
    phoneNumber: String
    phoneNumber2: String
    password: String!
    userName: String
    photoUrl: String
    homeAddress: HomeAddress
    freqAirports: [AdminLoc]
    # adminAirports: [AdminLoc]
    adminLocs(limit: Int): [AdminLoc]
    itineraries: [Itinerary]
    adminLegs: [Leg]
    adminGroups: [Group]
    adminTravelers: [User]
    memberships: [Membership]
  }
  input AdminLocInput {
    adminLocId: ID!
    notes: [String]
    use: Boolean

    # TODO add some way to add admins to a single location
    # so you can collaborate on loc details.  (where to pick up at airport,  where to load in venue etc)
  }
  type AdminLoc {
    id: ID!
    location: Location
    use: Boolean
    notes: [String]
    ownerAdmin: ID
  }
  type Group {
    title: String
    members: [User]
  }
  type Membership {
    company: Company
    memberNumber: String
  }
`

export default userSchema
