import { gql } from "apollo-server"
import { PersistedQueryNotFoundError } from "apollo-server-errors"

export const GET_ALL_USERS = gql`
  query ALL_USERS {
    users {
      email
      password
      userHandle
      id
      firstName
      lastName
    }
  }
`
export const RESET_DB = gql`
  mutation RESET_DB($secretWord: String!) {
    wipeData(secretWord: $secretWord)
  }
`
export const CREATE_USER = gql`
  mutation CREATE_USER(
    $email: String!
    $password: String!
    $userHandle: String
    $firstName: String
    $lastName: String
  ) {
    createUser(
      email: $email
      password: $password
      userHandle: $userHandle
      firstName: $firstName
      lastName: $lastName
    ) {
      email
      password
      userHandle
      id
      firstName
      lastName
    }
  }
`
export const CREATE_SONG = gql`
  mutation CREATE_SONG($adminId: ID!, $title: String!) {
    createSong(adminId: $adminId, title: $title) {
      title
    }
  }
`

exports.GET_USER_SONGS = gql`
  query GET_USER_SONGS($userId: ID!) {
    user(id: $userId) {
      songs {
        title
        id
      }
    }
  }
`

export const stars = () => {
  console.log(
    `\n ⭐   🌟   ⭐   🌟  ⭐   🌟   ⭐   🌟  ⭐   🌟   ⭐   🌟  \n \n `
  )
}
