import Itinerary from "../models/itinerary.model"

const itineraryResolver = {
  Mutation: {
    createItinerary: async (p, { name }) => {
      const itin = await Itinerary.create({ name })
      return itin
    }
  },
  Itinerary: {
    id: itin => itin._id
  }
}

export default itineraryResolver
