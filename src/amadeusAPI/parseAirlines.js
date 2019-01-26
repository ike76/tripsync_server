const { bigString } = require("./airlines")
const fs = require("fs")
const bigArray = bigString.split("\n")
const bigObject = bigArray.reduce((obj, airline) => {
  const array = airline.split(",")
  console.log("array", array)
  const [name, iata, icao, name2, country] = array
  if (icao) {
    obj[icao] = { name, iata, icao, name2, country }
  }
  if (iata) {
    obj[iata] = { name, iata, icao, name2, country }
  }
  return obj
}, {})
console.log(bigObject)
const objJson = JSON.stringify(bigObject, null, 2)
fs.writeFile("airlinesObj.json", objJson, err => {
  if (err) console.log(err)
})
