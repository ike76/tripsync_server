import { gql } from "apollo-server-express"

export const userSchema = gql`
  extend type Query {
    # me: User
    user(id: ID!): User
    users: [User!]
  }
  extend type Mutation {
    createUser(
      firstName: String
      lastName: String
      email: String!
      password: String!
      userHandle: String
      photoUrl: String
      rating: Int
    ): User
    deleteUser(id: ID!): Boolean
    signUp(email: String!, password: String!, userHandle: String): Token
  }
  type Token {
    jwt: String!
  }
  type User {
    id: ID!
    firstName: String
    lastName: String
    email: String!
    password: String!
    userHandle: String
    rating: Int
    songs: [Song!]
  }
`

export default userSchema
