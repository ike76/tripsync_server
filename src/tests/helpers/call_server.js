export const testApiUrl = "http://localhost:5000/graphql"
import { print } from "graphql"
import axios from "axios"

export const callApi = ({ query, variables, jwt = "" }) => {
  return axios
    .post(
      testApiUrl,
      {
        query: print(query),
        variables
      },
      {
        headers: {
          authorization: jwt
        }
      }
    )
    .then(({ data }) => data)
}

export const foundErrorWithText = (err, searchText) => {
  return !!err.response.data.errors.find(e => e.message.includes(searchText))
}

export const showError = err => {
  console.log("☠️ . . . ERRORS . . . ☠️", err.response.data.errors)
}

export const stars = () => {
  console.log(
    `\n ⭐   🌟   ⭐   🌟  ⭐   🌟   ⭐   🌟  ⭐   🌟   ⭐   🌟  \n \n `
  )
}
