import { gql } from "apollo-server-express"

const companySchema = gql`
  type Company {
    name: String
    name2: String
    iata: String
    icao: String
    airlineCode: String
    companyType: String
  }
`

export default companySchema
