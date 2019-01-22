import { gql } from "apollo-server"

export const SIGN_UP = gql`
  mutation SIGN_UP($email: String!, $password: String!) {
    signUp(email: $email, password: $password) {
      jwt
    }
  }
`

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
  mutation CREATE_SONG($title: String!) {
    createSong(title: $title) {
      title
    }
  }
`

exports.GET_MY_SONGS = gql`
  query MY_SONGS {
    mySongs {
      title
      bpm
      id
    }
  }
`
