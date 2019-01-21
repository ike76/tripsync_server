import { gql } from "apollo-server-express"

export const userSchema = gql`
  extend type Query {
    # me: User
    user(id: ID!): User
    users: [User!]
  }

  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String!
    password: String!
    userHandle: String
    songs: [Song!]
  }
`

export default userSchema
