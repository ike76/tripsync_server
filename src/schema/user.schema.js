import { gql } from "apollo-server-express"

const userSchema = gql`
  extend type Query {
    # me: User
    user(id: ID!): User
    users: [User!]
  }
  extend type Mutation {
    deleteUser(id: ID!): Boolean
    updateMe(
      firstName: String
      lastName: String
      email: String
      userName: String
      photoUrl: String
    ): User
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String!
    password: String!
    userName: String
    photoUrl: String
    homeAirports: [Location]
    itineraries: [Itinerary]
    adminLegs: [Leg]
    adminGroups: [Group]
    memberships: [Membership]
  }
  type Group {
    title: String
    members: [User]
  }
  type Membership {
    company: Company
  }
  type Company {
    name: String
    photoUrl: String
    nameShort: String
    airlineCode: String
  }
`

export default userSchema
