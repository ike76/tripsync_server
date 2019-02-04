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
    createTraveler(input: UserInput!): User
    updateUser(
      input: UserInput
      homeAddressInput: HomeAddressInput
      userId: ID!
    ): User
    deleteUser(id: ID!): Boolean
    updateMe(
      firstName: String
      lastName: String
      email: String
      userName: String
      photoUrl: String
    ): User
    updateAdminLoc(input: AdminLocInput!): AdminLoc
  }
  input AdminLocInput {
    adminLocId: ID!
    notes: [String]
    # TODO add some way to add admins to a single location
    # so you can collaborate on loc details.  (where to pick up at airport,  where to load in venue etc)
  }
  input UserInput {
    firstName: String
    lastName: String
    email: String
    password: String
    userName: String
    photoUrl: String
    homeAirports: [String!]
  }
  input HomeAddressInput {
    street: String
    lat: Int
    lng: Int
  }
  type HomeAddress {
    street: String
    lat: Int
    lng: Int
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
    homeAirports: [Location]
    # adminAirports: [AdminLoc]
    adminLocs(limit: Int): [AdminLoc]
    itineraries: [Itinerary]
    adminLegs: [Leg]
    adminGroups: [Group]
    adminTravelers: [User]
    memberships: [Membership]
  }
  type AdminLoc {
    id: ID!
    location: Location!
    notes: [String]
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
