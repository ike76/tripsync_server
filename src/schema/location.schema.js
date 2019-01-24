import { gql } from "apollo-server-express"

const locationSchema = gql`
  type Location {
    lat: Float
    lng: Float
    streetAddress: String
    city: String
    state: String
    country: String
    title: String
    titleShort: String
  }
`

export default locationSchema
