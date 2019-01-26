const airports = require("airports")

const IST = airports.find(ap => ap.iata === "IST")

console.log(IST)
