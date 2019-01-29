export const createRideFromSegment = ({ segment, airports, airlines }) => {
  const {
    carrierCode,
    arrival,
    departure,
    number,
    duration
  } = segment.flightSegment
  const origin = airports.find(ap => ap.airportCode === departure.iataCode)
  const destination = airports.find(ap => ap.airportCode === arrival.iataCode)
  const company = airlines.find(al => al.airlineCode === carrierCode)
  const ride = {
    type: "flight",
    name: number,
    company,
    departureTime: departure.at,
    arrivalTime: arrival.at,
    lastUpdated: Date.now(),
    origin,
    destination,
    duration
  }
  return ride
}

export function createItineraryFromOption({
  option,
  travelers,
  airlines,
  airports
}) {
  const ridesArr = option.segments.map(segments => {
    return segments.map(segment =>
      createRideFromSegment({ segment, airports, airlines })
    )
  })
  return {
    amadeusID: option.id,
    price: option.price.total,
    taxes: option.price,
    travelers,
    rides: ridesArr[0], // rides are outgoing flights
    returnRides: ridesArr[1] // return rides are returning flights
  }
}
