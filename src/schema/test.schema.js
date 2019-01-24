import { gql } from "apollo-server-express"

const testSchema = gql`
  extend type Query {
    helloWorld: String
  }
  extend type Mutation {
    newGuy(email: String!, password: String!): User
  }
`

export default testSchema
