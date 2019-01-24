import { gql } from "apollo-server"

export const SIGN_UP = gql`
  mutation SIGN_UP($email: String!, $password: String!) {
    signUp(email: $email, password: $password) {
      jwt
    }
  }
`
export const SIGN_IN = gql`
  query SIGN_IN($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      jwt
    }
  }
`

export const UPDATE_ME = gql`
  mutation UPDATE_ME(
    $firstName: String
    $lastName: String
    $email: String
    $userName: String
    $photoUrl: String
  ) {
    updateMe(
      firstName: $firstName
      lastName: $lastName
      userName: $userName
      photoUrl: $photoUrl
      email: $email
    ) {
      firstName
      lastName
      userName
      password
      photoUrl
      id
    }
  }
`

export const GET_ALL_USERS = gql`
  query ALL_USERS {
    users {
      email
      password
      userName
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
