import { gql } from "apollo-server-express"
import messageSchema from "./message.schema"
import userSchema from "./user.schema"

export const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
  type Subscription {
    _: Boolean
  }
`

export default [linkSchema, userSchema, messageSchema]
