import { gql } from "apollo-server"

const songSchema = gql`
  extend type Query {
    songs: [Song!]
    song(id: ID!): Song
    mySongs: [Song!]
  }
  extend type Mutation {
    createSong(title: String!, bpm: Int, style: [String]): Song!
  }
  type Song {
    id: ID!
    title: String!
    bpm: Int
    style: [String]
    admin: User
  }
`

export default songSchema
