import { gql } from "apollo-server-express"

const authSchema = gql`
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
    signUp(email: String!, password: String!, userHandle: String): Token
  }
  extend type Query {
    signIn(email: String!, password: String!): Token
  }
  type Token {
    jwt: String!
  }
`

export default authSchema
