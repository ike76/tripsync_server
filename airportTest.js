// const airports = require("airports")
// const fs = require("fs")

// const airportSearchObject = airports.reduce((obj, airport) => {
//   if (airport.type !== "airport") return obj
//   if (airport.size === "small") return obj
//   //   if (airport.size === "medium") return obj
//   if (airport.iata) obj[airport.iata] = airport
//   if (airport.name) obj[airport.name] = airport
//   return obj
// }, {})
// const jsonFile = JSON.stringify(airportSearchObject)
// fs.writeFileSync("airportsObject.json", jsonFile)
// const firstTenObj = Object.entries(airportSearchObject).slice(0, 10)
// const length = Object.keys(airportSearchObject).length
// console.log(firstTenObj)
// console.log("length", length)
