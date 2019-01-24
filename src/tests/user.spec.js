import "dotenv/config"
import { expect } from "chai"
import {
  callApi,
  foundErrorWithText,
  showError,
  stars
} from "./helpers/call_server"
import { RESET_DB, SIGN_UP, SIGN_IN, UPDATE_ME } from "./helpers/userQueries"
import { mochaAsync } from "./helpers/mochaAsync"
before(() => {
  stars()
  return callApi({
    query: RESET_DB,
    variables: { secretWord: process.env.SECRET_DELETE_WORD }
  })
})
after(() => {
  return callApi({
    query: RESET_DB,
    variables: { secretWord: process.env.SECRET_DELETE_WORD }
  })
})

describe("Users", async () => {
  let validUser = {
    email: "newguy@hey.net",
    password: "powerpow",
    userHandle: "new_guy_432"
  }
  let jwt
  it("can sign up", async () => {
    const { data } = await callApi({
      query: SIGN_UP,
      variables: validUser
    })
    jwt = data.signUp.jwt
    expect(!!jwt).to.be.true
  })
  it("can sign in with valid email / password", async () => {
    const { data } = await callApi({
      query: SIGN_IN,
      variables: { email: validUser.email, password: validUser.password }
    })
    jwt = data.signIn.jwt
    expect(!!jwt).to.be.true
  })
  it("unknown user cannot sign in", async () => {
    const { data, errors } = await callApi({
      query: SIGN_IN,
      variables: { email: "chuck@pirates.org", password: "whatever" }
    })
    expect(data.signIn).to.be.null
    const error =
      errors.length && errors.find(e => e.extensions.code === "UNAUTHENTICATED")
    expect(!!error).true
  })
  it("cannot sign in with wrong password", async () => {
    const { data, errors } = await callApi({
      query: SIGN_IN,
      variables: { email: validUser.email, password: "nopeIforgotmypassword" }
    })
    expect(data.signIn).to.be.null
    const error =
      errors.length && errors.find(e => e.extensions.code === "UNAUTHENTICATED")
    expect(!!error).true
  })

  it("rejects signup no email or pw", async () => {
    const variables = {
      userName: "Tbone sucka"
    }
    let emailErr, pwErr
    await callApi({
      query: SIGN_UP,
      variables
    }).catch(err => {
      emailErr = foundErrorWithText(err, "email")
      pwErr = foundErrorWithText(err, "password")
    })
    expect(pwErr).to.be.true
    expect(emailErr).to.be.true
  })
  it("can add all information to profile", async () => {
    const guyInfo = {
      ...validUser,
      firstName: "guyInfo",
      lastName: "turdston",
      userName: "hey_now",
      photoUrl: "http://cloudinary.something",
      email: "mynew@email.com"
    }
    const { data, errors } = await callApi({
      query: UPDATE_ME,
      variables: guyInfo,
      jwt
    })
    expect(errors).undefined
    expect(!!data).true
    const {
      updateMe: { firstName, lastName, userName, photoUrl }
    } = data
    expect(firstName).to.eq(guyInfo.firstName)
    expect(lastName).to.eq(guyInfo.lastName)
    expect(userName).to.eq(guyInfo.userName)
    expect(photoUrl).to.eq(guyInfo.photoUrl)
  })
  return null
})
