import "dotenv/config"
import { expect } from "chai"
import { callApi, foundErrorWithText, showError } from "./helpers/call_server"
import {
  stars,
  GET_ALL_USERS,
  RESET_DB,
  CREATE_USER,
  CREATE_SONG,
  GET_USER_SONGS
} from "./helpers/testQueries.spec"

before(done => {
  stars()
  callApi({
    query: RESET_DB,
    variables: { secretWord: process.env.SECRET_DELETE_WORD }
  }).then(() => done())
})
after(done => {
  callApi({
    query: RESET_DB,
    variables: { secretWord: process.env.SECRET_DELETE_WORD }
  }).then(() => done())
})

describe("Users", () => {
  let validUser
  it("starts with empty user collection", async () => {
    const response = await callApi({ query: GET_ALL_USERS, variables: {} })
    expect(response).to.eql({ data: { users: [] } })
  })
  it("creates a user", async () => {
    const variables = {
      email: "test@test.io",
      password: "powerpow",
      userHandle: "testy_T",
      firstName: "Testoph",
      lastName: "McTesterton"
    }
    const { data } = await callApi({ query: CREATE_USER, variables })
    validUser = data.createUser
    const { password, id, ...origUserInfo } = variables
    expect(validUser).to.include(origUserInfo)
  })
  it("rejects with no email or pw", async () => {
    const variables = {
      userHandle: "Tbone sucka"
    }
    let emailErr, pwErr
    await callApi({
      query: CREATE_USER,
      variables
    }).catch(err => {
      emailErr = foundErrorWithText(err, "email")
      pwErr = foundErrorWithText(err, "password")
    })

    expect(emailErr).to.be.true
    expect(pwErr).to.be.true
  })
  it("valid user can add a song", async () => {
    const song1 = {
      adminId: validUser.id,
      title: "hey now"
    }

    const { data, errors } = await callApi({
      query: CREATE_SONG,
      variables: song1
    })
    expect(errors).to.be.undefined
    expect(data).to.eql({ createSong: { title: "hey now" } })
  })
  it("can add a 2nd song ", async () => {
    const song2 = {
      adminId: validUser.id,
      title: "my second song"
    }
    const { data, errors } = await callApi({
      query: CREATE_SONG,
      variables: song2
    })
    expect(data).to.eql({ createSong: { title: "my second song" } })
  })
  it("can list 2 songs", async () => {
    const { data } = await callApi({
      query: GET_USER_SONGS,
      variables: { userId: validUser.id }
    })
    expect(data.user.songs).to.have.length(2)
    expect(data.user.songs[1]).to.include({ title: "my second song" })
  })
})
