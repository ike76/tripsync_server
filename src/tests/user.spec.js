import "dotenv/config"
import { expect } from "chai"
import {
  callApi,
  foundErrorWithText,
  showError,
  stars
} from "./helpers/call_server"
import {
  RESET_DB,
  CREATE_USER,
  CREATE_SONG,
  GET_USER_SONGS,
  SIGN_UP,
  GET_MY_SONGS
} from "./helpers/userQueries"
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
  let validUser
  let jwt
  it("can sign in", async () => {
    const newGuy = {
      email: "newguy@hey.net",
      password: "powerpow",
      userHandle: "new_guy_432"
    }
    const { data } = await callApi({
      query: SIGN_UP,
      variables: newGuy
    })
    jwt = data.signUp.jwt
  })

  it("rejects with no email or pw", async () => {
    const variables = {
      userHandle: "Tbone sucka"
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

  it("signed in user can add a song", async () => {
    const song1 = {
      title: "hey now"
    }

    const { data, errors } = await callApi({
      query: CREATE_SONG,
      variables: song1,
      jwt
    })

    expect(errors).to.be.undefined
    expect(data).to.eql({ createSong: { title: "hey now" } })
  })
  it("not signed in user cant add a song", async () => {
    const song1 = {
      title: "hey now"
    }
    const { data, errors } = await callApi({
      query: CREATE_SONG,
      variables: song1,
      jwt: "" // not signed in
    })
    expect(data).to.be.null
    expect(errors.length).to.be.greaterThan(0)
  })
  it("can add a 2nd song ", async () => {
    const { data, errors } = await callApi({
      query: CREATE_SONG,
      variables: { title: "my second song" },
      jwt
    })
    expect(data).to.eql({ createSong: { title: "my second song" } })
  })
  it("can get my songs", async () => {
    const { data } = await callApi({
      query: GET_MY_SONGS,
      jwt
    })
    expect(data.mySongs).to.have.length(2)
    expect(data.mySongs[1]).to.include({ title: "my second song" })
  })
  return null
})
