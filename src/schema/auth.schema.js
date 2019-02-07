import { gql } from "apollo-server-express"

const authSchema = gql`
  extend type Mutation {
    # createUser is for admin to make travelers.
    createUser(input: NewUserInput!): User
    signUp(email: String!, password: String!, userHandle: String): Token
  }
  input NewUserInput {
    firstName: String
    lastName: String
    email: String
    password: String
    userName: String!
    photoUrl: String
  }
  extend type Query {
    signIn(email: String!, password: String!): Token
    refreshToken(jwt: String!): Token
    me: User
  }
  type Token {
    jwt: String!
  }
`

export default authSchema
