import Amadeus from "amadeus"
import { fakeResults } from "./testResponse"
// import airports from "./filteredAirports.json"

const amadeus = new Amadeus({
  clientId: process.env.AMADEUS_CLIENT_ID,
  clientSecret: process.env.AMADEUS_CLIENT_SECRET
})

export function getAirlineInfo(iataCode) {
  return amadeus.referenceData.airlines.get({
    airlineCodes: iataCode
  })
}

export const parseResults = rawResults => {
  const { data } = rawResults // this will switch to rawResult for real calls
  // offer.offerItems.length is always 1
  const parseService = service => {
    const segments = service[0].segments
    return segments
  }
  function parseOffer(offer) {
    const { price, services } = offer.offerItems[0]
    return {
      id: offer.id,
      price,
      segments: parseService(services)
    }
  }
  const maxResults = 4
  const parsed = data.slice(0, maxResults).map(offer => parseOffer(offer))
  return { parsed }
}

// export const getFlights = async ({ origin, destination, departureDate }) => {
//   const { data } = await amadeus.shopping.flightOffers.get({
//     origin,
//     destination,
//     departureDate,
//     currency: "USD"
//   })

//   const returnObj = {}
// }
