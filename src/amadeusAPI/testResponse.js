export const fakeResults = {
  contentType: "application/vnd.amadeus+json",
  statusCode: 200,
  request: {
    host: "test.api.amadeus.com",
    port: 443,
    ssl: true,
    scheme: "https",
    verb: "GET",
    path: "/v1/shopping/flight-offers",
    params: {
      origin: "NYC",
      destination: "MAD",
      departureDate: "2019-08-01",
      currency: "USD"
    },
    queryPath:
      "/v1/shopping/flight-offers?origin=NYC&destination=MAD&departureDate=2019-08-01&currency=USD",
    bearerToken: "GD88Lhfg02poSFfRzx5U7Ldb5bXX",
    clientVersion: "3.0.0",
    languageVersion: "",
    appId: null,
    appVersion: null,
    headers: {
      "User-Agent": "amadeus-node/3.0.0 node/",
      Accept: "application/json, application/vnd.amadeus+json",
      Authorization: "Bearer GD88Lhfg02poSFfRzx5U7Ldb5bXX"
    }
  },
  body:
    '{"data":[{"type":"flight-offer","id":"1548417551763-1976864240","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"1","at":"2019-08-01T19:05:00-04:00"},"arrival":{"iataCode":"IST","terminal":"I","at":"2019-08-02T11:55:00+03:00"},"carrierCode":"TK","number":"2","aircraft":{"code":"77W"},"operating":{"carrierCode":"TK","number":"2"},"duration":"0DT9H50M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"S","availability":9,"fareBasis":"SHV3PXOW"}},{"flightSegment":{"departure":{"iataCode":"IST","terminal":"I","at":"2019-08-02T13:20:00+03:00"},"arrival":{"iataCode":"MAD","terminal":"1","at":"2019-08-02T16:45:00+02:00"},"carrierCode":"TK","number":"1859","aircraft":{"code":"333"},"operating":{"carrierCode":"TK","number":"1859"},"duration":"0DT4H25M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"S","availability":9,"fareBasis":"SHV3PXOW"}}]}],"price":{"total":"949.40","totalTaxes":"232.40"},"pricePerAdult":{"total":"949.40","totalTaxes":"232.40"}}]},{"type":"flight-offer","id":"1548417551763--1718739878","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"5","at":"2019-08-01T23:25:00-04:00"},"arrival":{"iataCode":"LIS","terminal":"1","at":"2019-08-02T11:15:00+01:00"},"carrierCode":"TP","number":"208","aircraft":{"code":"332"},"operating":{"carrierCode":"TP","number":"208"},"duration":"0DT6H50M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"O","availability":9,"fareBasis":"OUSDSI0E"}},{"flightSegment":{"departure":{"iataCode":"LIS","terminal":"1","at":"2019-08-02T18:55:00+01:00"},"arrival":{"iataCode":"MAD","terminal":"2","at":"2019-08-02T21:15:00+02:00"},"carrierCode":"TP","number":"1018","aircraft":{"code":"319"},"operating":{"carrierCode":"TP","number":"1018"},"duration":"0DT1H20M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"O","availability":9,"fareBasis":"OUSDSI0E"}}]}],"price":{"total":"124.29","totalTaxes":"108.29"},"pricePerAdult":{"total":"124.29","totalTaxes":"108.29"}}]},{"type":"flight-offer","id":"1548417551763--826100410","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","at":"2019-08-01T15:00:00-04:00"},"arrival":{"iataCode":"LHR","at":"2019-08-01T23:58:00+01:00"},"carrierCode":"6X","number":"9306","aircraft":{"code":"744"},"operating":{"carrierCode":"6X","number":"9306"},"duration":"0DT3H58M"},"pricingDetailPerAdult":{"travelClass":"BUSINESS","fareClass":"J","availability":9,"fareBasis":"J6XQSMIX"}},{"flightSegment":{"departure":{"iataCode":"LHR","terminal":"3","at":"2019-08-02T08:30:00+01:00"},"arrival":{"iataCode":"MAD","terminal":"1","at":"2019-08-02T11:50:00+02:00"},"carrierCode":"6X","number":"7100","aircraft":{"code":"340"},"operating":{"carrierCode":"6X","number":"7100"},"duration":"0DT2H20M"},"pricingDetailPerAdult":{"travelClass":"BUSINESS","fareClass":"J","availability":9,"fareBasis":"J6XQSMIX"}}]}],"price":{"total":"366.14","totalTaxes":"48.14"},"pricePerAdult":{"total":"366.14","totalTaxes":"48.14"}}]},{"type":"flight-offer","id":"1548417551763--784176114","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"4","at":"2019-08-01T20:10:00-04:00"},"arrival":{"iataCode":"BCN","terminal":"1","at":"2019-08-02T10:05:00+02:00"},"carrierCode":"DL","number":"476","aircraft":{"code":"333"},"operating":{"carrierCode":"DL","number":"476"},"duration":"0DT7H55M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"B","availability":9,"fareBasis":"BFFWUS"}},{"flightSegment":{"departure":{"iataCode":"BCN","terminal":"1","at":"2019-08-02T12:00:00+02:00"},"arrival":{"iataCode":"MAD","terminal":"2","at":"2019-08-02T13:30:00+02:00"},"carrierCode":"DL","number":"6767","aircraft":{"code":"332"},"operating":{"carrierCode":"UX","number":"6767"},"duration":"0DT1H30M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"V","availability":9,"fareBasis":"BFFWUS"}}]}],"price":{"total":"2264.84","totalTaxes":"217.84"},"pricePerAdult":{"total":"2264.84","totalTaxes":"217.84"}}]},{"type":"flight-offer","id":"1548417551763--284179311","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"1","at":"2019-08-01T17:40:00-04:00"},"arrival":{"iataCode":"VIE","at":"2019-08-02T08:15:00+02:00"},"carrierCode":"OS","number":"88","aircraft":{"code":"76W"},"operating":{"carrierCode":"OS","number":"88"},"duration":"0DT8H35M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"B","availability":9,"fareBasis":"B2E"}},{"flightSegment":{"departure":{"iataCode":"VIE","at":"2019-08-02T10:10:00+02:00"},"arrival":{"iataCode":"FRA","terminal":"1","at":"2019-08-02T11:40:00+02:00"},"carrierCode":"OS","number":"129","aircraft":{"code":"320"},"operating":{"carrierCode":"OS","number":"129"},"duration":"0DT1H30M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"B","availability":9,"fareBasis":"B2E"}},{"flightSegment":{"departure":{"iataCode":"FRA","terminal":"1","at":"2019-08-02T13:10:00+02:00"},"arrival":{"iataCode":"MAD","terminal":"2","at":"2019-08-02T15:40:00+02:00"},"carrierCode":"OS","number":"7461","aircraft":{"code":"32A"},"operating":{"carrierCode":"LH","number":"7461"},"duration":"0DT2H30M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"B","availability":9,"fareBasis":"B2E"}}]}],"price":{"total":"2643.58","totalTaxes":"276.58"},"pricePerAdult":{"total":"2643.58","totalTaxes":"276.58"}}]},{"type":"flight-offer","id":"1548417551763--6467004","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","at":"2019-08-01T20:00:00-04:00"},"arrival":{"iataCode":"LHR","at":"2019-08-02T08:05:00+01:00"},"carrierCode":"6X","number":"3806","aircraft":{"code":"744"},"operating":{"carrierCode":"6X","number":"3806"},"duration":"0DT7H5M"},"pricingDetailPerAdult":{"travelClass":"BUSINESS","fareClass":"J","availability":9,"fareBasis":"J6XQSMIX"}},{"flightSegment":{"departure":{"iataCode":"LHR","at":"2019-08-02T10:30:00+01:00"},"arrival":{"iataCode":"MAD","at":"2019-08-02T13:00:00+02:00"},"carrierCode":"6X","number":"9931","aircraft":{"code":"320"},"operating":{"carrierCode":"6X","number":"9931"},"duration":"0DT1H30M"},"pricingDetailPerAdult":{"travelClass":"BUSINESS","fareClass":"J","availability":9,"fareBasis":"J6XQSMIX"}}]}],"price":{"total":"366.14","totalTaxes":"48.14"},"pricePerAdult":{"total":"366.14","totalTaxes":"48.14"}}]},{"type":"flight-offer","id":"1548417551763--1062573344","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"LGA","terminal":"B","at":"2019-08-01T11:15:00-04:00"},"arrival":{"iataCode":"YYZ","terminal":"1","at":"2019-08-01T12:55:00-04:00"},"carrierCode":"AC","number":"709","aircraft":{"code":"320"},"operating":{"carrierCode":"AC","number":"709"},"duration":"0DT1H40M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"K","availability":9,"fareBasis":"K21Q0TG"}},{"flightSegment":{"departure":{"iataCode":"YYZ","terminal":"1","at":"2019-08-01T18:45:00-04:00"},"arrival":{"iataCode":"MAD","terminal":"1","at":"2019-08-02T07:55:00+02:00"},"carrierCode":"AC","number":"836","aircraft":{"code":"789"},"operating":{"carrierCode":"AC","number":"836"},"duration":"0DT7H10M"},"pricingDetailPerAdult":{"travelClass":"PREMIUM_ECONOMY","fareClass":"O","availability":9,"fareBasis":"OFFEO"}}]}],"price":{"total":"2240.10","totalTaxes":"232.10"},"pricePerAdult":{"total":"2240.10","totalTaxes":"232.10"}}]},{"type":"flight-offer","id":"1548417551763--1466052741","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"LGA","terminal":"B","at":"2019-08-01T14:40:00-04:00"},"arrival":{"iataCode":"YYZ","terminal":"1","at":"2019-08-01T16:20:00-04:00"},"carrierCode":"AC","number":"715","aircraft":{"code":"320"},"operating":{"carrierCode":"AC","number":"715"},"duration":"0DT1H40M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"K","availability":9,"fareBasis":"K21Q0TG"}},{"flightSegment":{"departure":{"iataCode":"YYZ","terminal":"1","at":"2019-08-01T18:45:00-04:00"},"arrival":{"iataCode":"MAD","terminal":"1","at":"2019-08-02T07:55:00+02:00"},"carrierCode":"AC","number":"836","aircraft":{"code":"789"},"operating":{"carrierCode":"AC","number":"836"},"duration":"0DT7H10M"},"pricingDetailPerAdult":{"travelClass":"PREMIUM_ECONOMY","fareClass":"O","availability":9,"fareBasis":"OFFEO"}}]}],"price":{"total":"2240.10","totalTaxes":"232.10"},"pricePerAdult":{"total":"2240.10","totalTaxes":"232.10"}}]},{"type":"flight-offer","id":"1548417551763--1426825265","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"4","at":"2019-08-01T19:35:00-04:00"},"arrival":{"iataCode":"MAD","terminal":"1","at":"2019-08-02T09:15:00+02:00"},"carrierCode":"DL","number":"126","aircraft":{"code":"764"},"operating":{"carrierCode":"DL","number":"126"},"duration":"0DT7H40M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"B","availability":9,"fareBasis":"BFFWUS"}}]}],"price":{"total":"2250.70","totalTaxes":"203.70"},"pricePerAdult":{"total":"2250.70","totalTaxes":"203.70"}}]},{"type":"flight-offer","id":"1548417551763--1343107158","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"EWR","terminal":"A","at":"2019-08-01T12:50:00-04:00"},"arrival":{"iataCode":"YYZ","terminal":"1","at":"2019-08-01T14:27:00-04:00"},"carrierCode":"AC","number":"7655","aircraft":{"code":"E75"},"operating":{"carrierCode":"AC","number":"7655"},"duration":"0DT1H37M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"A","availability":9,"fareBasis":"A21Q1TG"}},{"flightSegment":{"departure":{"iataCode":"YYZ","terminal":"1","at":"2019-08-01T18:45:00-04:00"},"arrival":{"iataCode":"MAD","terminal":"1","at":"2019-08-02T07:55:00+02:00"},"carrierCode":"AC","number":"836","aircraft":{"code":"789"},"operating":{"carrierCode":"AC","number":"836"},"duration":"0DT7H10M"},"pricingDetailPerAdult":{"travelClass":"PREMIUM_ECONOMY","fareClass":"O","availability":9,"fareBasis":"OFFEO"}}]}],"price":{"total":"2273.10","totalTaxes":"232.10"},"pricePerAdult":{"total":"2273.10","totalTaxes":"232.10"}}]},{"type":"flight-offer","id":"1548417551763--847297117","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"EWR","terminal":"B","at":"2019-08-01T17:45:00-04:00"},"arrival":{"iataCode":"LIS","terminal":"1","at":"2019-08-02T05:35:00+01:00"},"carrierCode":"TP","number":"202","aircraft":{"code":"332"},"operating":{"carrierCode":"TP","number":"202"},"duration":"0DT6H50M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"E","availability":9,"fareBasis":"EUSDSI0E"}},{"flightSegment":{"departure":{"iataCode":"LIS","terminal":"1","at":"2019-08-02T16:15:00+01:00"},"arrival":{"iataCode":"MAD","terminal":"2","at":"2019-08-02T18:30:00+02:00"},"carrierCode":"TP","number":"1024","aircraft":{"code":"319"},"operating":{"carrierCode":"TP","number":"1024"},"duration":"0DT1H15M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"E","availability":9,"fareBasis":"EUSDSI0E"}}]}],"price":{"total":"260.29","totalTaxes":"123.29"},"pricePerAdult":{"total":"260.29","totalTaxes":"123.29"}}]},{"type":"flight-offer","id":"1548417551763-711444366","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"1","at":"2019-08-01T12:30:00-04:00"},"arrival":{"iataCode":"IST","terminal":"I","at":"2019-08-02T05:15:00+03:00"},"carrierCode":"TK","number":"4","aircraft":{"code":"333"},"operating":{"carrierCode":"TK","number":"4"},"duration":"0DT9H45M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"S","availability":9,"fareBasis":"SHV3PXOW"}},{"flightSegment":{"departure":{"iataCode":"IST","terminal":"I","at":"2019-08-02T07:15:00+03:00"},"arrival":{"iataCode":"MAD","terminal":"1","at":"2019-08-02T10:40:00+02:00"},"carrierCode":"TK","number":"1857","aircraft":{"code":"333"},"operating":{"carrierCode":"TK","number":"1857"},"duration":"0DT4H25M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"S","availability":9,"fareBasis":"SHV3PXOW"}}]}],"price":{"total":"949.40","totalTaxes":"232.40"},"pricePerAdult":{"total":"949.40","totalTaxes":"232.40"}}]},{"type":"flight-offer","id":"1548417551763--102369544","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"4","at":"2019-08-01T19:35:00-04:00"},"arrival":{"iataCode":"MAD","terminal":"1","at":"2019-08-02T09:15:00+02:00"},"carrierCode":"KL","number":"6126","aircraft":{"code":"764"},"operating":{"carrierCode":"DL","number":"6126"},"duration":"0DT7H40M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"B","availability":4,"fareBasis":"BFFWUS"}}]}],"price":{"total":"2263.70","totalTaxes":"216.70"},"pricePerAdult":{"total":"2263.70","totalTaxes":"216.70"}}]},{"type":"flight-offer","id":"1548417551763-443751032","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"EWR","terminal":"B","at":"2019-08-01T17:45:00-04:00"},"arrival":{"iataCode":"LIS","terminal":"1","at":"2019-08-02T05:35:00+01:00"},"carrierCode":"TP","number":"202","aircraft":{"code":"332"},"operating":{"carrierCode":"TP","number":"202"},"duration":"0DT6H50M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"E","availability":9,"fareBasis":"EUSDSI0E"}},{"flightSegment":{"departure":{"iataCode":"LIS","terminal":"1","at":"2019-08-02T09:10:00+01:00"},"arrival":{"iataCode":"MAD","terminal":"2","at":"2019-08-02T11:25:00+02:00"},"carrierCode":"TP","number":"1016","aircraft":{"code":"319"},"operating":{"carrierCode":"TP","number":"1016"},"duration":"0DT1H15M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"E","availability":9,"fareBasis":"EUSDSI0E"}}]}],"price":{"total":"260.29","totalTaxes":"123.29"},"pricePerAdult":{"total":"260.29","totalTaxes":"123.29"}}]},{"type":"flight-offer","id":"1548417551763--1319311543","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"5","at":"2019-08-01T23:25:00-04:00"},"arrival":{"iataCode":"LIS","terminal":"1","at":"2019-08-02T11:15:00+01:00"},"carrierCode":"TP","number":"208","aircraft":{"code":"332"},"operating":{"carrierCode":"TP","number":"208"},"duration":"0DT6H50M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"O","availability":9,"fareBasis":"OUSDSI0E"}},{"flightSegment":{"departure":{"iataCode":"LIS","terminal":"1","at":"2019-08-02T16:15:00+01:00"},"arrival":{"iataCode":"MAD","terminal":"2","at":"2019-08-02T18:30:00+02:00"},"carrierCode":"TP","number":"1024","aircraft":{"code":"319"},"operating":{"carrierCode":"TP","number":"1024"},"duration":"0DT1H15M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"O","availability":9,"fareBasis":"OUSDSI0E"}}]}],"price":{"total":"124.29","totalTaxes":"108.29"},"pricePerAdult":{"total":"124.29","totalTaxes":"108.29"}}]},{"type":"flight-offer","id":"1548417551763-254087094","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","at":"2019-08-01T05:00:00-04:00"},"arrival":{"iataCode":"LHR","at":"2019-08-01T14:00:00+01:00"},"carrierCode":"6X","number":"5500","aircraft":{"code":"737"},"operating":{"carrierCode":"6X","number":"5500"},"duration":"0DT4H0M"},"pricingDetailPerAdult":{"travelClass":"BUSINESS","fareClass":"J","availability":2,"fareBasis":"J6XQSMIX"}},{"flightSegment":{"departure":{"iataCode":"LHR","at":"2019-08-01T19:40:00+01:00"},"arrival":{"iataCode":"MAD","at":"2019-08-01T23:00:00+02:00"},"carrierCode":"6X","number":"9508","aircraft":{"code":"343"},"operating":{"carrierCode":"6X","number":"9508"},"duration":"0DT2H20M"},"pricingDetailPerAdult":{"travelClass":"BUSINESS","fareClass":"J","availability":9,"fareBasis":"J6XQSMIX"}}]}],"price":{"total":"366.14","totalTaxes":"48.14"},"pricePerAdult":{"total":"366.14","totalTaxes":"48.14"}}]},{"type":"flight-offer","id":"1548417551763--1783535952","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"8","at":"2019-08-01T18:55:00-04:00"},"arrival":{"iataCode":"MAD","terminal":"4S","at":"2019-08-02T08:10:00+02:00"},"carrierCode":"AA","number":"94","aircraft":{"code":"772"},"operating":{"carrierCode":"AA","number":"94"},"duration":"0DT7H15M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"Y","availability":7,"fareBasis":"Y1N0C9M1"}}]}],"price":{"total":"2902.70","totalTaxes":"203.70"},"pricePerAdult":{"total":"2902.70","totalTaxes":"203.70"}}]},{"type":"flight-offer","id":"1548417551763--1126877979","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"4","at":"2019-08-01T17:50:00-04:00"},"arrival":{"iataCode":"CDG","terminal":"2E","at":"2019-08-02T07:20:00+02:00"},"carrierCode":"DL","number":"262","aircraft":{"code":"333"},"operating":{"carrierCode":"DL","number":"262"},"duration":"0DT7H30M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"B","availability":9,"fareBasis":"BFFWUS"}},{"flightSegment":{"departure":{"iataCode":"CDG","terminal":"2F","at":"2019-08-02T12:15:00+02:00"},"arrival":{"iataCode":"MAD","terminal":"2","at":"2019-08-02T14:30:00+02:00"},"carrierCode":"DL","number":"8630","aircraft":{"code":"321"},"operating":{"carrierCode":"AF","number":"8630"},"duration":"0DT2H15M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"B","availability":9,"fareBasis":"BFFWUS"}}]}],"price":{"total":"2271.66","totalTaxes":"224.66"},"pricePerAdult":{"total":"2271.66","totalTaxes":"224.66"}}]},{"type":"flight-offer","id":"1548417551763--231792773","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","at":"2019-08-01T20:00:00-04:00"},"arrival":{"iataCode":"LHR","at":"2019-08-02T08:05:00+01:00"},"carrierCode":"6X","number":"1201","aircraft":{"code":"744"},"operating":{"carrierCode":"6X","number":"1201"},"duration":"0DT7H5M"},"pricingDetailPerAdult":{"travelClass":"BUSINESS","fareClass":"J","availability":9,"fareBasis":"J6XQSMIX"}},{"flightSegment":{"departure":{"iataCode":"LHR","at":"2019-08-02T10:30:00+01:00"},"arrival":{"iataCode":"MAD","at":"2019-08-02T13:00:00+02:00"},"carrierCode":"6X","number":"9931","aircraft":{"code":"320"},"operating":{"carrierCode":"6X","number":"9931"},"duration":"0DT1H30M"},"pricingDetailPerAdult":{"travelClass":"BUSINESS","fareClass":"J","availability":9,"fareBasis":"J6XQSMIX"}}]}],"price":{"total":"366.14","totalTaxes":"48.14"},"pricePerAdult":{"total":"366.14","totalTaxes":"48.14"}}]},{"type":"flight-offer","id":"1548417551763-937442493","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"LGA","terminal":"B","at":"2019-08-01T15:50:00-04:00"},"arrival":{"iataCode":"YYZ","terminal":"1","at":"2019-08-01T17:30:00-04:00"},"carrierCode":"AC","number":"717","aircraft":{"code":"320"},"operating":{"carrierCode":"AC","number":"717"},"duration":"0DT1H40M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"K","availability":9,"fareBasis":"K21Q0TG"}},{"flightSegment":{"departure":{"iataCode":"YYZ","terminal":"1","at":"2019-08-01T18:45:00-04:00"},"arrival":{"iataCode":"MAD","terminal":"1","at":"2019-08-02T07:55:00+02:00"},"carrierCode":"AC","number":"836","aircraft":{"code":"789"},"operating":{"carrierCode":"AC","number":"836"},"duration":"0DT7H10M"},"pricingDetailPerAdult":{"travelClass":"PREMIUM_ECONOMY","fareClass":"O","availability":9,"fareBasis":"OFFEO"}}]}],"price":{"total":"2240.10","totalTaxes":"232.10"},"pricePerAdult":{"total":"2240.10","totalTaxes":"232.10"}}]},{"type":"flight-offer","id":"1548417551763-875484514","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"5","at":"2019-08-01T23:25:00-04:00"},"arrival":{"iataCode":"LIS","terminal":"1","at":"2019-08-02T11:15:00+01:00"},"carrierCode":"TP","number":"208","aircraft":{"code":"332"},"operating":{"carrierCode":"TP","number":"208"},"duration":"0DT6H50M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"O","availability":9,"fareBasis":"OUSDSI0E"}},{"flightSegment":{"departure":{"iataCode":"LIS","terminal":"1","at":"2019-08-02T13:15:00+01:00"},"arrival":{"iataCode":"MAD","terminal":"2","at":"2019-08-02T15:30:00+02:00"},"carrierCode":"TP","number":"1028","aircraft":{"code":"319"},"operating":{"carrierCode":"TP","number":"1028"},"duration":"0DT1H15M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"O","availability":9,"fareBasis":"OUSDSI0E"}}]}],"price":{"total":"124.29","totalTaxes":"108.29"},"pricePerAdult":{"total":"124.29","totalTaxes":"108.29"}}]},{"type":"flight-offer","id":"1548417551763--816986800","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"EWR","terminal":"C","at":"2019-08-01T20:15:00-04:00"},"arrival":{"iataCode":"MAD","terminal":"1","at":"2019-08-02T09:30:00+02:00"},"carrierCode":"LH","number":"7970","aircraft":{"code":"777"},"operating":{"carrierCode":"UA","number":"7970"},"duration":"0DT7H15M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"B","availability":6,"fareBasis":"B2E"}}]}],"price":{"total":"2588.20","totalTaxes":"221.20"},"pricePerAdult":{"total":"2588.20","totalTaxes":"221.20"}}]},{"type":"flight-offer","id":"1548417551763--610705762","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"4","at":"2019-08-01T20:15:00-04:00"},"arrival":{"iataCode":"CDG","terminal":"2E","at":"2019-08-02T09:45:00+02:00"},"carrierCode":"DL","number":"264","aircraft":{"code":"333"},"operating":{"carrierCode":"DL","number":"264"},"duration":"0DT7H30M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"B","availability":9,"fareBasis":"BFFWUS"}},{"flightSegment":{"departure":{"iataCode":"CDG","terminal":"2F","at":"2019-08-02T14:50:00+02:00"},"arrival":{"iataCode":"MAD","terminal":"2","at":"2019-08-02T16:55:00+02:00"},"carrierCode":"DL","number":"8334","aircraft":{"code":"319"},"operating":{"carrierCode":"AF","number":"8334"},"duration":"0DT2H5M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"B","availability":9,"fareBasis":"BFFWUS"}}]}],"price":{"total":"2271.66","totalTaxes":"224.66"},"pricePerAdult":{"total":"2271.66","totalTaxes":"224.66"}}]},{"type":"flight-offer","id":"1548417551763-1347498940","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"EWR","terminal":"B","at":"2019-08-01T17:45:00-04:00"},"arrival":{"iataCode":"LIS","terminal":"1","at":"2019-08-02T05:35:00+01:00"},"carrierCode":"TP","number":"202","aircraft":{"code":"332"},"operating":{"carrierCode":"TP","number":"202"},"duration":"0DT6H50M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"E","availability":9,"fareBasis":"EUSDSI0E"}},{"flightSegment":{"departure":{"iataCode":"LIS","terminal":"1","at":"2019-08-02T13:15:00+01:00"},"arrival":{"iataCode":"MAD","terminal":"2","at":"2019-08-02T15:30:00+02:00"},"carrierCode":"TP","number":"1028","aircraft":{"code":"319"},"operating":{"carrierCode":"TP","number":"1028"},"duration":"0DT1H15M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"E","availability":9,"fareBasis":"EUSDSI0E"}}]}],"price":{"total":"260.29","totalTaxes":"123.29"},"pricePerAdult":{"total":"260.29","totalTaxes":"123.29"}}]},{"type":"flight-offer","id":"1548417551763-1867312335","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"4","at":"2019-08-01T17:50:00-04:00"},"arrival":{"iataCode":"CDG","terminal":"2E","at":"2019-08-02T07:20:00+02:00"},"carrierCode":"DL","number":"262","aircraft":{"code":"333"},"operating":{"carrierCode":"DL","number":"262"},"duration":"0DT7H30M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"B","availability":9,"fareBasis":"BFFWUS"}},{"flightSegment":{"departure":{"iataCode":"ORY","terminal":"W","at":"2019-08-02T10:25:00+02:00"},"arrival":{"iataCode":"MAD","terminal":"2","at":"2019-08-02T12:25:00+02:00"},"carrierCode":"DL","number":"6781","aircraft":{"code":"73H"},"operating":{"carrierCode":"UX","number":"6781"},"duration":"0DT2H0M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"U","availability":9,"fareBasis":"BFFWUS"}}]}],"price":{"total":"2266.79","totalTaxes":"219.79"},"pricePerAdult":{"total":"2266.79","totalTaxes":"219.79"}}]},{"type":"flight-offer","id":"1548417551763--2019811353","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"EWR","at":"2019-08-01T21:50:00-04:00"},"arrival":{"iataCode":"LHR","at":"2019-08-02T08:45:00+01:00"},"carrierCode":"6X","number":"188","aircraft":{"code":"777"},"operating":{"carrierCode":"6X","number":"188"},"duration":"0DT5H55M"},"pricingDetailPerAdult":{"travelClass":"BUSINESS","fareClass":"J","availability":9,"fareBasis":"J6XQSMIX"}},{"flightSegment":{"departure":{"iataCode":"LHR","at":"2019-08-02T10:30:00+01:00"},"arrival":{"iataCode":"MAD","at":"2019-08-02T13:00:00+02:00"},"carrierCode":"6X","number":"9931","aircraft":{"code":"320"},"operating":{"carrierCode":"6X","number":"9931"},"duration":"0DT1H30M"},"pricingDetailPerAdult":{"travelClass":"BUSINESS","fareClass":"J","availability":9,"fareBasis":"J6XQSMIX"}}]}],"price":{"total":"366.14","totalTaxes":"48.14"},"pricePerAdult":{"total":"366.14","totalTaxes":"48.14"}}]},{"type":"flight-offer","id":"1548417551763-1455744055","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"LGA","terminal":"B","at":"2019-08-01T12:15:00-04:00"},"arrival":{"iataCode":"YYZ","terminal":"1","at":"2019-08-01T13:55:00-04:00"},"carrierCode":"AC","number":"711","aircraft":{"code":"320"},"operating":{"carrierCode":"AC","number":"711"},"duration":"0DT1H40M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"K","availability":9,"fareBasis":"K21Q0TG"}},{"flightSegment":{"departure":{"iataCode":"YYZ","terminal":"1","at":"2019-08-01T18:45:00-04:00"},"arrival":{"iataCode":"MAD","terminal":"1","at":"2019-08-02T07:55:00+02:00"},"carrierCode":"AC","number":"836","aircraft":{"code":"789"},"operating":{"carrierCode":"AC","number":"836"},"duration":"0DT7H10M"},"pricingDetailPerAdult":{"travelClass":"PREMIUM_ECONOMY","fareClass":"O","availability":9,"fareBasis":"OFFEO"}}]}],"price":{"total":"2240.10","totalTaxes":"232.10"},"pricePerAdult":{"total":"2240.10","totalTaxes":"232.10"}}]},{"type":"flight-offer","id":"1548417551763--1708049589","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"7","at":"2019-08-01T17:15:00-04:00"},"arrival":{"iataCode":"MAD","terminal":"4S","at":"2019-08-02T06:15:00+02:00"},"carrierCode":"BA","number":"4270","aircraft":{"code":"346"},"operating":{"carrierCode":"IB","number":"4270"},"duration":"0DT7H0M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"Y","availability":9,"fareBasis":"Y1N0C9M1"}}]}],"price":{"total":"2914.70","totalTaxes":"203.70"},"pricePerAdult":{"total":"2914.70","totalTaxes":"203.70"}}]},{"type":"flight-offer","id":"1548417551763-820657269","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"1","at":"2019-08-01T21:20:00-04:00"},"arrival":{"iataCode":"CMN","terminal":"2","at":"2019-08-02T09:10:00+01:00"},"carrierCode":"AT","number":"201","aircraft":{"code":"789"},"operating":{"carrierCode":"AT","number":"201"},"duration":"0DT6H50M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"Q","availability":9,"fareBasis":"QA0W0USA"}},{"flightSegment":{"departure":{"iataCode":"CMN","terminal":"2","at":"2019-08-02T15:45:00+01:00"},"arrival":{"iataCode":"MAD","terminal":"4S","at":"2019-08-02T18:35:00+02:00"},"carrierCode":"AT","number":"970","aircraft":{"code":"738"},"operating":{"carrierCode":"AT","number":"970"},"duration":"0DT1H50M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"Q","availability":9,"fareBasis":"QA0W0USA"}}]}],"price":{"total":"829.81","totalTaxes":"235.81"},"pricePerAdult":{"total":"829.81","totalTaxes":"235.81"}}]},{"type":"flight-offer","id":"1548417551763-954254055","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"5","at":"2019-08-01T17:20:00-04:00"},"arrival":{"iataCode":"DUB","terminal":"2","at":"2019-08-02T04:50:00+01:00"},"carrierCode":"EI","number":"104","aircraft":{"code":"330"},"operating":{"carrierCode":"EI","number":"104"},"duration":"0DT6H30M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"M","availability":9,"fareBasis":"MH1NS"}},{"flightSegment":{"departure":{"iataCode":"DUB","terminal":"2","at":"2019-08-02T06:15:00+01:00"},"arrival":{"iataCode":"MAD","terminal":"1","at":"2019-08-02T09:50:00+02:00"},"carrierCode":"EI","number":"592","aircraft":{"code":"320"},"operating":{"carrierCode":"EI","number":"592"},"duration":"0DT2H35M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"W","availability":9,"fareBasis":"WOW26GDS"}}]}],"price":{"total":"885.82","totalTaxes":"69.82"},"pricePerAdult":{"total":"885.82","totalTaxes":"69.82"}}]},{"type":"flight-offer","id":"1548417551763-452521619","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"1","at":"2019-08-01T18:45:00-04:00"},"arrival":{"iataCode":"CDG","terminal":"2E","at":"2019-08-02T08:10:00+02:00"},"carrierCode":"DL","number":"1015","aircraft":{"code":"388"},"operating":{"carrierCode":"AF","number":"1015"},"duration":"0DT7H25M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"B","availability":9,"fareBasis":"BFFWUS"}},{"flightSegment":{"departure":{"iataCode":"CDG","terminal":"2F","at":"2019-08-02T12:15:00+02:00"},"arrival":{"iataCode":"MAD","terminal":"2","at":"2019-08-02T14:30:00+02:00"},"carrierCode":"DL","number":"8630","aircraft":{"code":"321"},"operating":{"carrierCode":"AF","number":"8630"},"duration":"0DT2H15M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"B","availability":9,"fareBasis":"BFFWUS"}}]}],"price":{"total":"2271.66","totalTaxes":"224.66"},"pricePerAdult":{"total":"2271.66","totalTaxes":"224.66"}}]},{"type":"flight-offer","id":"1548417551763--606558740","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"7","at":"2019-08-01T20:00:00-04:00"},"arrival":{"iataCode":"LHR","terminal":"4","at":"2019-08-02T08:05:00+01:00"},"carrierCode":"6X","number":"176","aircraft":{"code":"744"},"operating":{"carrierCode":"6X","number":"176"},"duration":"0DT7H5M"},"pricingDetailPerAdult":{"travelClass":"BUSINESS","fareClass":"J","availability":9,"fareBasis":"J6XQSMIX"}},{"flightSegment":{"departure":{"iataCode":"LHR","at":"2019-08-02T10:30:00+01:00"},"arrival":{"iataCode":"MAD","at":"2019-08-02T13:00:00+02:00"},"carrierCode":"6X","number":"9931","aircraft":{"code":"320"},"operating":{"carrierCode":"6X","number":"9931"},"duration":"0DT1H30M"},"pricingDetailPerAdult":{"travelClass":"BUSINESS","fareClass":"J","availability":9,"fareBasis":"J6XQSMIX"}}]}],"price":{"total":"366.14","totalTaxes":"48.14"},"pricePerAdult":{"total":"366.14","totalTaxes":"48.14"}}]},{"type":"flight-offer","id":"1548417551763-614225555","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"4","at":"2019-08-01T22:05:00-04:00"},"arrival":{"iataCode":"MAD","terminal":"1","at":"2019-08-02T11:30:00+02:00"},"carrierCode":"UX","number":"92","aircraft":{"code":"332"},"operating":{"carrierCode":"UX","number":"92"},"duration":"0DT7H25M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"M","availability":9,"fareBasis":"MYYOAE"}}]}],"price":{"total":"1947.70","totalTaxes":"203.70"},"pricePerAdult":{"total":"1947.70","totalTaxes":"203.70"}}]},{"type":"flight-offer","id":"1548417551763-569522731","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"4","at":"2019-08-01T20:15:00-04:00"},"arrival":{"iataCode":"CDG","terminal":"2E","at":"2019-08-02T09:45:00+02:00"},"carrierCode":"DL","number":"264","aircraft":{"code":"333"},"operating":{"carrierCode":"DL","number":"264"},"duration":"0DT7H30M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"B","availability":9,"fareBasis":"BFFWUS"}},{"flightSegment":{"departure":{"iataCode":"CDG","terminal":"2F","at":"2019-08-02T12:15:00+02:00"},"arrival":{"iataCode":"MAD","terminal":"2","at":"2019-08-02T14:30:00+02:00"},"carrierCode":"DL","number":"8630","aircraft":{"code":"321"},"operating":{"carrierCode":"AF","number":"8630"},"duration":"0DT2H15M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"B","availability":9,"fareBasis":"BFFWUS"}}]}],"price":{"total":"2271.66","totalTaxes":"224.66"},"pricePerAdult":{"total":"2271.66","totalTaxes":"224.66"}}]},{"type":"flight-offer","id":"1548417551763-1546356137","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"EWR","terminal":"C","at":"2019-08-01T20:05:00-04:00"},"arrival":{"iataCode":"MAD","terminal":"1","at":"2019-08-02T09:20:00+02:00"},"carrierCode":"UA","number":"51","aircraft":{"code":"777"},"operating":{"carrierCode":"UA","number":"51"},"duration":"0DT7H15M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"B","availability":9,"fareBasis":"B2E"}}]}],"price":{"total":"2570.70","totalTaxes":"203.70"},"pricePerAdult":{"total":"2570.70","totalTaxes":"203.70"}}]},{"type":"flight-offer","id":"1548417551763-1523775378","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"4","at":"2019-08-01T19:35:00-04:00"},"arrival":{"iataCode":"MAD","terminal":"1","at":"2019-08-02T09:15:00+02:00"},"carrierCode":"AF","number":"3679","aircraft":{"code":"764"},"operating":{"carrierCode":"DL","number":"3679"},"duration":"0DT7H40M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"B","availability":9,"fareBasis":"BFFWUS"}}]}],"price":{"total":"2263.70","totalTaxes":"216.70"},"pricePerAdult":{"total":"2263.70","totalTaxes":"216.70"}}]},{"type":"flight-offer","id":"1548417551763--2079564477","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"5","at":"2019-08-01T23:25:00-04:00"},"arrival":{"iataCode":"LIS","terminal":"1","at":"2019-08-02T11:15:00+01:00"},"carrierCode":"TP","number":"208","aircraft":{"code":"332"},"operating":{"carrierCode":"TP","number":"208"},"duration":"0DT6H50M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"O","availability":9,"fareBasis":"OUSDSI0E"}},{"flightSegment":{"departure":{"iataCode":"LIS","terminal":"1","at":"2019-08-02T21:35:00+01:00"},"arrival":{"iataCode":"MAD","terminal":"2","at":"2019-08-02T23:50:00+02:00"},"carrierCode":"TP","number":"1022","aircraft":{"code":"319"},"operating":{"carrierCode":"TP","number":"1022"},"duration":"0DT1H15M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"O","availability":9,"fareBasis":"OUSDSI0E"}}]}],"price":{"total":"124.29","totalTaxes":"108.29"},"pricePerAdult":{"total":"124.29","totalTaxes":"108.29"}}]},{"type":"flight-offer","id":"1548417551763-1759922171","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"7","at":"2019-08-01T00:30:00-04:00"},"arrival":{"iataCode":"KBP","at":"2019-08-01T16:20:00+03:00"},"carrierCode":"PS","number":"232","aircraft":{"code":"777"},"operating":{"carrierCode":"PS","number":"232"},"duration":"0DT8H50M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"S","availability":9,"fareBasis":"SH1FAP5"}},{"flightSegment":{"departure":{"iataCode":"KBP","at":"2019-08-01T20:40:00+03:00"},"arrival":{"iataCode":"MAD","terminal":"4S","at":"2019-08-02T00:10:00+02:00"},"carrierCode":"PS","number":"945","aircraft":{"code":"738"},"operating":{"carrierCode":"PS","number":"945"},"duration":"0DT4H30M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"S","availability":9,"fareBasis":"SH1FAP5"}}]}],"price":{"total":"980.20","totalTaxes":"220.20"},"pricePerAdult":{"total":"980.20","totalTaxes":"220.20"}}]},{"type":"flight-offer","id":"1548417551763-974606255","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"EWR","terminal":"C","at":"2019-08-01T20:15:00-04:00"},"arrival":{"iataCode":"MAD","terminal":"1","at":"2019-08-02T09:30:00+02:00"},"carrierCode":"SN","number":"9027","aircraft":{"code":"777"},"operating":{"carrierCode":"UA","number":"9027"},"duration":"0DT7H15M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"B","availability":4,"fareBasis":"B2E"}}]}],"price":{"total":"2588.20","totalTaxes":"221.20"},"pricePerAdult":{"total":"2588.20","totalTaxes":"221.20"}}]},{"type":"flight-offer","id":"1548417551763-1710796863","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"7","at":"2019-08-01T17:15:00-04:00"},"arrival":{"iataCode":"MAD","terminal":"4S","at":"2019-08-02T06:15:00+02:00"},"carrierCode":"IB","number":"6250","aircraft":{"code":"346"},"operating":{"carrierCode":"IB","number":"6250"},"duration":"0DT7H0M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"Y","availability":9,"fareBasis":"Y1N0C9M1"}}]}],"price":{"total":"2914.70","totalTaxes":"203.70"},"pricePerAdult":{"total":"2914.70","totalTaxes":"203.70"}}]},{"type":"flight-offer","id":"1548417551763--1264198180","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"4","at":"2019-08-01T17:50:00-04:00"},"arrival":{"iataCode":"CDG","terminal":"2E","at":"2019-08-02T07:20:00+02:00"},"carrierCode":"DL","number":"262","aircraft":{"code":"333"},"operating":{"carrierCode":"DL","number":"262"},"duration":"0DT7H30M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"B","availability":9,"fareBasis":"BFFWUS"}},{"flightSegment":{"departure":{"iataCode":"CDG","terminal":"2F","at":"2019-08-02T09:05:00+02:00"},"arrival":{"iataCode":"MAD","terminal":"2","at":"2019-08-02T11:10:00+02:00"},"carrierCode":"DL","number":"8374","aircraft":{"code":"321"},"operating":{"carrierCode":"AF","number":"8374"},"duration":"0DT2H5M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"B","availability":9,"fareBasis":"BFFWUS"}}]}],"price":{"total":"2271.66","totalTaxes":"224.66"},"pricePerAdult":{"total":"2271.66","totalTaxes":"224.66"}}]},{"type":"flight-offer","id":"1548417551763--280507170","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"8","at":"2019-08-01T18:55:00-04:00"},"arrival":{"iataCode":"MAD","terminal":"4S","at":"2019-08-02T08:10:00+02:00"},"carrierCode":"AY","number":"4008","aircraft":{"code":"772"},"operating":{"carrierCode":"AA","number":"4008"},"duration":"0DT7H15M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"Y","availability":9,"fareBasis":"Y1N0C9M1"}}]}],"price":{"total":"2902.70","totalTaxes":"203.70"},"pricePerAdult":{"total":"2902.70","totalTaxes":"203.70"}}]},{"type":"flight-offer","id":"1548417551763--169916866","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","at":"2019-08-01T20:00:00-04:00"},"arrival":{"iataCode":"LHR","at":"2019-08-02T08:05:00+01:00"},"carrierCode":"6X","number":"1226","aircraft":{"code":"744"},"operating":{"carrierCode":"6X","number":"1226"},"duration":"0DT7H5M"},"pricingDetailPerAdult":{"travelClass":"BUSINESS","fareClass":"J","availability":9,"fareBasis":"J6XQSMIX"}},{"flightSegment":{"departure":{"iataCode":"LHR","at":"2019-08-02T10:30:00+01:00"},"arrival":{"iataCode":"MAD","at":"2019-08-02T13:00:00+02:00"},"carrierCode":"6X","number":"9931","aircraft":{"code":"320"},"operating":{"carrierCode":"6X","number":"9931"},"duration":"0DT1H30M"},"pricingDetailPerAdult":{"travelClass":"BUSINESS","fareClass":"J","availability":9,"fareBasis":"J6XQSMIX"}}]}],"price":{"total":"366.14","totalTaxes":"48.14"},"pricePerAdult":{"total":"366.14","totalTaxes":"48.14"}}]},{"type":"flight-offer","id":"1548417551763--1130208453","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"7","at":"2019-08-01T17:15:00-04:00"},"arrival":{"iataCode":"MAD","terminal":"4S","at":"2019-08-02T06:15:00+02:00"},"carrierCode":"AY","number":"5654","aircraft":{"code":"346"},"operating":{"carrierCode":"IB","number":"5654"},"duration":"0DT7H0M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"Y","availability":9,"fareBasis":"Y1N0C9M1"}}]}],"price":{"total":"2902.70","totalTaxes":"203.70"},"pricePerAdult":{"total":"2902.70","totalTaxes":"203.70"}}]},{"type":"flight-offer","id":"1548417551763--1798025904","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"EWR","terminal":"A","at":"2019-08-01T14:25:00-04:00"},"arrival":{"iataCode":"YYZ","terminal":"1","at":"2019-08-01T16:02:00-04:00"},"carrierCode":"AC","number":"7657","aircraft":{"code":"E75"},"operating":{"carrierCode":"AC","number":"7657"},"duration":"0DT1H37M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"A","availability":9,"fareBasis":"A21Q1TG"}},{"flightSegment":{"departure":{"iataCode":"YYZ","terminal":"1","at":"2019-08-01T18:45:00-04:00"},"arrival":{"iataCode":"MAD","terminal":"1","at":"2019-08-02T07:55:00+02:00"},"carrierCode":"AC","number":"836","aircraft":{"code":"789"},"operating":{"carrierCode":"AC","number":"836"},"duration":"0DT7H10M"},"pricingDetailPerAdult":{"travelClass":"PREMIUM_ECONOMY","fareClass":"O","availability":9,"fareBasis":"OFFEO"}}]}],"price":{"total":"2273.10","totalTaxes":"232.10"},"pricePerAdult":{"total":"2273.10","totalTaxes":"232.10"}}]},{"type":"flight-offer","id":"1548417551763--416329371","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","at":"2019-08-01T20:00:00-04:00"},"arrival":{"iataCode":"LHR","at":"2019-08-02T08:05:00+01:00"},"carrierCode":"6X","number":"172","aircraft":{"code":"744"},"operating":{"carrierCode":"6X","number":"172"},"duration":"0DT7H5M"},"pricingDetailPerAdult":{"travelClass":"BUSINESS","fareClass":"J","availability":9,"fareBasis":"J6XQSMIX"}},{"flightSegment":{"departure":{"iataCode":"LHR","at":"2019-08-02T10:30:00+01:00"},"arrival":{"iataCode":"MAD","at":"2019-08-02T13:00:00+02:00"},"carrierCode":"6X","number":"9931","aircraft":{"code":"320"},"operating":{"carrierCode":"6X","number":"9931"},"duration":"0DT1H30M"},"pricingDetailPerAdult":{"travelClass":"BUSINESS","fareClass":"J","availability":9,"fareBasis":"J6XQSMIX"}}]}],"price":{"total":"366.14","totalTaxes":"48.14"},"pricePerAdult":{"total":"366.14","totalTaxes":"48.14"}}]},{"type":"flight-offer","id":"1548417551763--637103463","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","terminal":"4","at":"2019-08-01T22:05:00-04:00"},"arrival":{"iataCode":"MAD","terminal":"1","at":"2019-08-02T11:30:00+02:00"},"carrierCode":"DL","number":"6744","aircraft":{"code":"332"},"operating":{"carrierCode":"UX","number":"6744"},"duration":"0DT7H25M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"B","availability":9,"fareBasis":"BFFWUS"}}]}],"price":{"total":"2250.70","totalTaxes":"203.70"},"pricePerAdult":{"total":"2250.70","totalTaxes":"203.70"}}]},{"type":"flight-offer","id":"1548417551763--308374463","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"EWR","terminal":"B","at":"2019-08-01T17:45:00-04:00"},"arrival":{"iataCode":"LIS","terminal":"1","at":"2019-08-02T05:35:00+01:00"},"carrierCode":"TP","number":"202","aircraft":{"code":"332"},"operating":{"carrierCode":"TP","number":"202"},"duration":"0DT6H50M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"E","availability":9,"fareBasis":"EUSDSI0E"}},{"flightSegment":{"departure":{"iataCode":"LIS","terminal":"1","at":"2019-08-02T06:55:00+01:00"},"arrival":{"iataCode":"MAD","terminal":"2","at":"2019-08-02T09:10:00+02:00"},"carrierCode":"TP","number":"1026","aircraft":{"code":"319"},"operating":{"carrierCode":"TP","number":"1026"},"duration":"0DT1H15M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"E","availability":9,"fareBasis":"EUSDSI0E"}}]}],"price":{"total":"260.29","totalTaxes":"123.29"},"pricePerAdult":{"total":"260.29","totalTaxes":"123.29"}}]},{"type":"flight-offer","id":"1548417551763--2006711749","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"EWR","terminal":"B","at":"2019-08-01T17:25:00-04:00"},"arrival":{"iataCode":"DUB","terminal":"2","at":"2019-08-02T04:50:00+01:00"},"carrierCode":"EI","number":"100","aircraft":{"code":"330"},"operating":{"carrierCode":"EI","number":"100"},"duration":"0DT6H25M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"M","availability":9,"fareBasis":"MH1NS"}},{"flightSegment":{"departure":{"iataCode":"DUB","terminal":"2","at":"2019-08-02T06:15:00+01:00"},"arrival":{"iataCode":"MAD","terminal":"1","at":"2019-08-02T09:50:00+02:00"},"carrierCode":"EI","number":"592","aircraft":{"code":"320"},"operating":{"carrierCode":"EI","number":"592"},"duration":"0DT2H35M"},"pricingDetailPerAdult":{"travelClass":"ECONOMY","fareClass":"W","availability":9,"fareBasis":"WOW26GDS"}}]}],"price":{"total":"885.82","totalTaxes":"69.82"},"pricePerAdult":{"total":"885.82","totalTaxes":"69.82"}}]},{"type":"flight-offer","id":"1548417551763--1298886572","offerItems":[{"services":[{"segments":[{"flightSegment":{"departure":{"iataCode":"JFK","at":"2019-08-01T20:00:00-04:00"},"arrival":{"iataCode":"LHR","at":"2019-08-02T08:05:00+01:00"},"carrierCode":"6X","number":"528","aircraft":{"code":"747"},"operating":{"carrierCode":"6X","number":"528"},"duration":"0DT7H5M"},"pricingDetailPerAdult":{"travelClass":"BUSINESS","fareClass":"J","availability":9,"fareBasis":"J6XQSMIX"}},{"flightSegment":{"departure":{"iataCode":"LHR","at":"2019-08-02T10:30:00+01:00"},"arrival":{"iataCode":"MAD","at":"2019-08-02T13:00:00+02:00"},"carrierCode":"6X","number":"9931","aircraft":{"code":"320"},"operating":{"carrierCode":"6X","number":"9931"},"duration":"0DT1H30M"},"pricingDetailPerAdult":{"travelClass":"BUSINESS","fareClass":"J","availability":9,"fareBasis":"J6XQSMIX"}}]}],"price":{"total":"366.14","totalTaxes":"48.14"},"pricePerAdult":{"total":"366.14","totalTaxes":"48.14"}}]}],"dictionaries":{"carriers":{"AA":"AMERICAN AIRLINES","KL":"KLM ROYAL DUTCH AIRLINES","6X":"AMADEUS SIX","AC":"AIR CANADA","PS":"UKRAINE INTL AIRLINES","UX":"AIR EUROPA","EI":"AER LINGUS","OS":"AUSTRIAN AIRLINES","AF":"AIR FRANCE","DL":"DELTA AIR LINES","UA":"UNITED AIRLINES","AT":"ROYAL AIR MAROC","TK":"TURKISH AIRLINES","AY":"FINNAIR","IB":"IBERIA","SN":"BRUSSELS AIRLINES","LH":"LUFTHANSA","TP":"TAP PORTUGAL","BA":"BRITISH AIRWAYS"},"currencies":{"USD":"US DOLLAR"},"aircraft":{"32A":"AIRBUS INDUSTRIE A320 SHARKLETS","E75":"EMBRAER 175","73H":"BOEING 737-800 (WINGLETS)","340":"AIRBUS INDUSTRIE A340","330":"AIRBUS INDUSTRIE A330","320":"AIRBUS INDUSTRIE A320-100/200","321":"AIRBUS INDUSTRIE A321","332":"AIRBUS INDUSTRIE A330-200","343":"AIRBUS INDUSTRIE A340-300","772":"BOEING 777-200/200ER","333":"AIRBUS INDUSTRIE A330-300","388":"AIRBUS INDUSTRIE A380-800","346":"AIRBUS INDUSTRIE A340-600","764":"BOEING 767-400","744":"BOEING 747-400","777":"BOEING 777-200/300","77W":"BOEING 777-300ER","76W":"BOEING 767-300","789":"BOEING 787-9","747":"BOEING 747 ALL SERIES PASSENGER","319":"AIRBUS INDUSTRIE A319","737":"BOEING 737 ALL SERIES PASSENGER","738":"BOEING 737-800"},"locations":{"EWR":{"subType":"AIRPORT","detailedName":"NEWARK LIBERTY INTL"},"CMN":{"subType":"AIRPORT","detailedName":"MOHAMMED V"},"CDG":{"subType":"AIRPORT","detailedName":"CHARLES DE GAULLE"},"LGA":{"subType":"AIRPORT","detailedName":"LAGUARDIA"},"IST":{"subType":"AIRPORT","detailedName":"ATATURK"},"BCN":{"subType":"AIRPORT","detailedName":"AIRPORT"},"JFK":{"subType":"AIRPORT","detailedName":"JOHN F KENNEDY INTL"},"DUB":{"subType":"AIRPORT","detailedName":"DUBLIN INTERNATIONAL"},"MAD":{"subType":"AIRPORT","detailedName":"ADOLFO SUAREZ BARAJAS"},"VIE":{"subType":"AIRPORT","detailedName":"VIENNA INTERNATIONAL"},"FRA":{"subType":"AIRPORT","detailedName":"FRANKFURT INTL"},"LHR":{"subType":"AIRPORT","detailedName":"HEATHROW"},"LIS":{"subType":"AIRPORT","detailedName":"AIRPORT"},"ORY":{"subType":"AIRPORT","detailedName":"ORLY"},"KBP":{"subType":"AIRPORT","detailedName":"BORYSPIL INTL"},"YYZ":{"subType":"AIRPORT","detailedName":"LESTER B. PEARSON INTL"}}},"meta":{"links":{"self":"https://test.api.amadeus.com/v1/shopping/flight-offers?origin=NYC&destination=MAD&departureDate=2019-08-01&adults=1&nonStop=false&currency=USD"},"currency":"USD","defaults":{"nonStop":false,"adults":1}}}',
  result: {
    data: [
      {
        type: "flight-offer",
        id: "1548417551763-1976864240",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "1",
                        at: "2019-08-01T19:05:00-04:00"
                      },
                      arrival: {
                        iataCode: "IST",
                        terminal: "I",
                        at: "2019-08-02T11:55:00+03:00"
                      },
                      carrierCode: "TK",
                      number: "2",
                      aircraft: { code: "77W" },
                      operating: { carrierCode: "TK", number: "2" },
                      duration: "0DT9H50M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "S",
                      availability: 9,
                      fareBasis: "SHV3PXOW"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "IST",
                        terminal: "I",
                        at: "2019-08-02T13:20:00+03:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2019-08-02T16:45:00+02:00"
                      },
                      carrierCode: "TK",
                      number: "1859",
                      aircraft: { code: "333" },
                      operating: { carrierCode: "TK", number: "1859" },
                      duration: "0DT4H25M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "S",
                      availability: 9,
                      fareBasis: "SHV3PXOW"
                    }
                  }
                ]
              }
            ],
            price: { total: "949.40", totalTaxes: "232.40" },
            pricePerAdult: { total: "949.40", totalTaxes: "232.40" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--1718739878",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "5",
                        at: "2019-08-01T23:25:00-04:00"
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2019-08-02T11:15:00+01:00"
                      },
                      carrierCode: "TP",
                      number: "208",
                      aircraft: { code: "332" },
                      operating: { carrierCode: "TP", number: "208" },
                      duration: "0DT6H50M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "O",
                      availability: 9,
                      fareBasis: "OUSDSI0E"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2019-08-02T18:55:00+01:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "2",
                        at: "2019-08-02T21:15:00+02:00"
                      },
                      carrierCode: "TP",
                      number: "1018",
                      aircraft: { code: "319" },
                      operating: { carrierCode: "TP", number: "1018" },
                      duration: "0DT1H20M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "O",
                      availability: 9,
                      fareBasis: "OUSDSI0E"
                    }
                  }
                ]
              }
            ],
            price: { total: "124.29", totalTaxes: "108.29" },
            pricePerAdult: { total: "124.29", totalTaxes: "108.29" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--826100410",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        at: "2019-08-01T15:00:00-04:00"
                      },
                      arrival: {
                        iataCode: "LHR",
                        at: "2019-08-01T23:58:00+01:00"
                      },
                      carrierCode: "6X",
                      number: "9306",
                      aircraft: { code: "744" },
                      operating: { carrierCode: "6X", number: "9306" },
                      duration: "0DT3H58M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "BUSINESS",
                      fareClass: "J",
                      availability: 9,
                      fareBasis: "J6XQSMIX"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "LHR",
                        terminal: "3",
                        at: "2019-08-02T08:30:00+01:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2019-08-02T11:50:00+02:00"
                      },
                      carrierCode: "6X",
                      number: "7100",
                      aircraft: { code: "340" },
                      operating: { carrierCode: "6X", number: "7100" },
                      duration: "0DT2H20M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "BUSINESS",
                      fareClass: "J",
                      availability: 9,
                      fareBasis: "J6XQSMIX"
                    }
                  }
                ]
              }
            ],
            price: { total: "366.14", totalTaxes: "48.14" },
            pricePerAdult: { total: "366.14", totalTaxes: "48.14" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--784176114",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "4",
                        at: "2019-08-01T20:10:00-04:00"
                      },
                      arrival: {
                        iataCode: "BCN",
                        terminal: "1",
                        at: "2019-08-02T10:05:00+02:00"
                      },
                      carrierCode: "DL",
                      number: "476",
                      aircraft: { code: "333" },
                      operating: { carrierCode: "DL", number: "476" },
                      duration: "0DT7H55M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "B",
                      availability: 9,
                      fareBasis: "BFFWUS"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "BCN",
                        terminal: "1",
                        at: "2019-08-02T12:00:00+02:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "2",
                        at: "2019-08-02T13:30:00+02:00"
                      },
                      carrierCode: "DL",
                      number: "6767",
                      aircraft: { code: "332" },
                      operating: { carrierCode: "UX", number: "6767" },
                      duration: "0DT1H30M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "V",
                      availability: 9,
                      fareBasis: "BFFWUS"
                    }
                  }
                ]
              }
            ],
            price: { total: "2264.84", totalTaxes: "217.84" },
            pricePerAdult: { total: "2264.84", totalTaxes: "217.84" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--284179311",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "1",
                        at: "2019-08-01T17:40:00-04:00"
                      },
                      arrival: {
                        iataCode: "VIE",
                        at: "2019-08-02T08:15:00+02:00"
                      },
                      carrierCode: "OS",
                      number: "88",
                      aircraft: { code: "76W" },
                      operating: { carrierCode: "OS", number: "88" },
                      duration: "0DT8H35M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "B",
                      availability: 9,
                      fareBasis: "B2E"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "VIE",
                        at: "2019-08-02T10:10:00+02:00"
                      },
                      arrival: {
                        iataCode: "FRA",
                        terminal: "1",
                        at: "2019-08-02T11:40:00+02:00"
                      },
                      carrierCode: "OS",
                      number: "129",
                      aircraft: { code: "320" },
                      operating: { carrierCode: "OS", number: "129" },
                      duration: "0DT1H30M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "B",
                      availability: 9,
                      fareBasis: "B2E"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "FRA",
                        terminal: "1",
                        at: "2019-08-02T13:10:00+02:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "2",
                        at: "2019-08-02T15:40:00+02:00"
                      },
                      carrierCode: "OS",
                      number: "7461",
                      aircraft: { code: "32A" },
                      operating: { carrierCode: "LH", number: "7461" },
                      duration: "0DT2H30M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "B",
                      availability: 9,
                      fareBasis: "B2E"
                    }
                  }
                ]
              }
            ],
            price: { total: "2643.58", totalTaxes: "276.58" },
            pricePerAdult: { total: "2643.58", totalTaxes: "276.58" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--6467004",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        at: "2019-08-01T20:00:00-04:00"
                      },
                      arrival: {
                        iataCode: "LHR",
                        at: "2019-08-02T08:05:00+01:00"
                      },
                      carrierCode: "6X",
                      number: "3806",
                      aircraft: { code: "744" },
                      operating: { carrierCode: "6X", number: "3806" },
                      duration: "0DT7H5M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "BUSINESS",
                      fareClass: "J",
                      availability: 9,
                      fareBasis: "J6XQSMIX"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "LHR",
                        at: "2019-08-02T10:30:00+01:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        at: "2019-08-02T13:00:00+02:00"
                      },
                      carrierCode: "6X",
                      number: "9931",
                      aircraft: { code: "320" },
                      operating: { carrierCode: "6X", number: "9931" },
                      duration: "0DT1H30M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "BUSINESS",
                      fareClass: "J",
                      availability: 9,
                      fareBasis: "J6XQSMIX"
                    }
                  }
                ]
              }
            ],
            price: { total: "366.14", totalTaxes: "48.14" },
            pricePerAdult: { total: "366.14", totalTaxes: "48.14" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--1062573344",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "LGA",
                        terminal: "B",
                        at: "2019-08-01T11:15:00-04:00"
                      },
                      arrival: {
                        iataCode: "YYZ",
                        terminal: "1",
                        at: "2019-08-01T12:55:00-04:00"
                      },
                      carrierCode: "AC",
                      number: "709",
                      aircraft: { code: "320" },
                      operating: { carrierCode: "AC", number: "709" },
                      duration: "0DT1H40M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "K",
                      availability: 9,
                      fareBasis: "K21Q0TG"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "YYZ",
                        terminal: "1",
                        at: "2019-08-01T18:45:00-04:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2019-08-02T07:55:00+02:00"
                      },
                      carrierCode: "AC",
                      number: "836",
                      aircraft: { code: "789" },
                      operating: { carrierCode: "AC", number: "836" },
                      duration: "0DT7H10M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "PREMIUM_ECONOMY",
                      fareClass: "O",
                      availability: 9,
                      fareBasis: "OFFEO"
                    }
                  }
                ]
              }
            ],
            price: { total: "2240.10", totalTaxes: "232.10" },
            pricePerAdult: { total: "2240.10", totalTaxes: "232.10" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--1466052741",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "LGA",
                        terminal: "B",
                        at: "2019-08-01T14:40:00-04:00"
                      },
                      arrival: {
                        iataCode: "YYZ",
                        terminal: "1",
                        at: "2019-08-01T16:20:00-04:00"
                      },
                      carrierCode: "AC",
                      number: "715",
                      aircraft: { code: "320" },
                      operating: { carrierCode: "AC", number: "715" },
                      duration: "0DT1H40M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "K",
                      availability: 9,
                      fareBasis: "K21Q0TG"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "YYZ",
                        terminal: "1",
                        at: "2019-08-01T18:45:00-04:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2019-08-02T07:55:00+02:00"
                      },
                      carrierCode: "AC",
                      number: "836",
                      aircraft: { code: "789" },
                      operating: { carrierCode: "AC", number: "836" },
                      duration: "0DT7H10M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "PREMIUM_ECONOMY",
                      fareClass: "O",
                      availability: 9,
                      fareBasis: "OFFEO"
                    }
                  }
                ]
              }
            ],
            price: { total: "2240.10", totalTaxes: "232.10" },
            pricePerAdult: { total: "2240.10", totalTaxes: "232.10" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--1426825265",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "4",
                        at: "2019-08-01T19:35:00-04:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2019-08-02T09:15:00+02:00"
                      },
                      carrierCode: "DL",
                      number: "126",
                      aircraft: { code: "764" },
                      operating: { carrierCode: "DL", number: "126" },
                      duration: "0DT7H40M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "B",
                      availability: 9,
                      fareBasis: "BFFWUS"
                    }
                  }
                ]
              }
            ],
            price: { total: "2250.70", totalTaxes: "203.70" },
            pricePerAdult: { total: "2250.70", totalTaxes: "203.70" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--1343107158",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "EWR",
                        terminal: "A",
                        at: "2019-08-01T12:50:00-04:00"
                      },
                      arrival: {
                        iataCode: "YYZ",
                        terminal: "1",
                        at: "2019-08-01T14:27:00-04:00"
                      },
                      carrierCode: "AC",
                      number: "7655",
                      aircraft: { code: "E75" },
                      operating: { carrierCode: "AC", number: "7655" },
                      duration: "0DT1H37M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "A",
                      availability: 9,
                      fareBasis: "A21Q1TG"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "YYZ",
                        terminal: "1",
                        at: "2019-08-01T18:45:00-04:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2019-08-02T07:55:00+02:00"
                      },
                      carrierCode: "AC",
                      number: "836",
                      aircraft: { code: "789" },
                      operating: { carrierCode: "AC", number: "836" },
                      duration: "0DT7H10M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "PREMIUM_ECONOMY",
                      fareClass: "O",
                      availability: 9,
                      fareBasis: "OFFEO"
                    }
                  }
                ]
              }
            ],
            price: { total: "2273.10", totalTaxes: "232.10" },
            pricePerAdult: { total: "2273.10", totalTaxes: "232.10" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--847297117",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "EWR",
                        terminal: "B",
                        at: "2019-08-01T17:45:00-04:00"
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2019-08-02T05:35:00+01:00"
                      },
                      carrierCode: "TP",
                      number: "202",
                      aircraft: { code: "332" },
                      operating: { carrierCode: "TP", number: "202" },
                      duration: "0DT6H50M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "E",
                      availability: 9,
                      fareBasis: "EUSDSI0E"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2019-08-02T16:15:00+01:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "2",
                        at: "2019-08-02T18:30:00+02:00"
                      },
                      carrierCode: "TP",
                      number: "1024",
                      aircraft: { code: "319" },
                      operating: { carrierCode: "TP", number: "1024" },
                      duration: "0DT1H15M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "E",
                      availability: 9,
                      fareBasis: "EUSDSI0E"
                    }
                  }
                ]
              }
            ],
            price: { total: "260.29", totalTaxes: "123.29" },
            pricePerAdult: { total: "260.29", totalTaxes: "123.29" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763-711444366",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "1",
                        at: "2019-08-01T12:30:00-04:00"
                      },
                      arrival: {
                        iataCode: "IST",
                        terminal: "I",
                        at: "2019-08-02T05:15:00+03:00"
                      },
                      carrierCode: "TK",
                      number: "4",
                      aircraft: { code: "333" },
                      operating: { carrierCode: "TK", number: "4" },
                      duration: "0DT9H45M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "S",
                      availability: 9,
                      fareBasis: "SHV3PXOW"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "IST",
                        terminal: "I",
                        at: "2019-08-02T07:15:00+03:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2019-08-02T10:40:00+02:00"
                      },
                      carrierCode: "TK",
                      number: "1857",
                      aircraft: { code: "333" },
                      operating: { carrierCode: "TK", number: "1857" },
                      duration: "0DT4H25M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "S",
                      availability: 9,
                      fareBasis: "SHV3PXOW"
                    }
                  }
                ]
              }
            ],
            price: { total: "949.40", totalTaxes: "232.40" },
            pricePerAdult: { total: "949.40", totalTaxes: "232.40" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--102369544",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "4",
                        at: "2019-08-01T19:35:00-04:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2019-08-02T09:15:00+02:00"
                      },
                      carrierCode: "KL",
                      number: "6126",
                      aircraft: { code: "764" },
                      operating: { carrierCode: "DL", number: "6126" },
                      duration: "0DT7H40M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "B",
                      availability: 4,
                      fareBasis: "BFFWUS"
                    }
                  }
                ]
              }
            ],
            price: { total: "2263.70", totalTaxes: "216.70" },
            pricePerAdult: { total: "2263.70", totalTaxes: "216.70" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763-443751032",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "EWR",
                        terminal: "B",
                        at: "2019-08-01T17:45:00-04:00"
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2019-08-02T05:35:00+01:00"
                      },
                      carrierCode: "TP",
                      number: "202",
                      aircraft: { code: "332" },
                      operating: { carrierCode: "TP", number: "202" },
                      duration: "0DT6H50M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "E",
                      availability: 9,
                      fareBasis: "EUSDSI0E"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2019-08-02T09:10:00+01:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "2",
                        at: "2019-08-02T11:25:00+02:00"
                      },
                      carrierCode: "TP",
                      number: "1016",
                      aircraft: { code: "319" },
                      operating: { carrierCode: "TP", number: "1016" },
                      duration: "0DT1H15M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "E",
                      availability: 9,
                      fareBasis: "EUSDSI0E"
                    }
                  }
                ]
              }
            ],
            price: { total: "260.29", totalTaxes: "123.29" },
            pricePerAdult: { total: "260.29", totalTaxes: "123.29" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--1319311543",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "5",
                        at: "2019-08-01T23:25:00-04:00"
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2019-08-02T11:15:00+01:00"
                      },
                      carrierCode: "TP",
                      number: "208",
                      aircraft: { code: "332" },
                      operating: { carrierCode: "TP", number: "208" },
                      duration: "0DT6H50M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "O",
                      availability: 9,
                      fareBasis: "OUSDSI0E"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2019-08-02T16:15:00+01:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "2",
                        at: "2019-08-02T18:30:00+02:00"
                      },
                      carrierCode: "TP",
                      number: "1024",
                      aircraft: { code: "319" },
                      operating: { carrierCode: "TP", number: "1024" },
                      duration: "0DT1H15M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "O",
                      availability: 9,
                      fareBasis: "OUSDSI0E"
                    }
                  }
                ]
              }
            ],
            price: { total: "124.29", totalTaxes: "108.29" },
            pricePerAdult: { total: "124.29", totalTaxes: "108.29" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763-254087094",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        at: "2019-08-01T05:00:00-04:00"
                      },
                      arrival: {
                        iataCode: "LHR",
                        at: "2019-08-01T14:00:00+01:00"
                      },
                      carrierCode: "6X",
                      number: "5500",
                      aircraft: { code: "737" },
                      operating: { carrierCode: "6X", number: "5500" },
                      duration: "0DT4H0M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "BUSINESS",
                      fareClass: "J",
                      availability: 2,
                      fareBasis: "J6XQSMIX"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "LHR",
                        at: "2019-08-01T19:40:00+01:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        at: "2019-08-01T23:00:00+02:00"
                      },
                      carrierCode: "6X",
                      number: "9508",
                      aircraft: { code: "343" },
                      operating: { carrierCode: "6X", number: "9508" },
                      duration: "0DT2H20M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "BUSINESS",
                      fareClass: "J",
                      availability: 9,
                      fareBasis: "J6XQSMIX"
                    }
                  }
                ]
              }
            ],
            price: { total: "366.14", totalTaxes: "48.14" },
            pricePerAdult: { total: "366.14", totalTaxes: "48.14" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--1783535952",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "8",
                        at: "2019-08-01T18:55:00-04:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "4S",
                        at: "2019-08-02T08:10:00+02:00"
                      },
                      carrierCode: "AA",
                      number: "94",
                      aircraft: { code: "772" },
                      operating: { carrierCode: "AA", number: "94" },
                      duration: "0DT7H15M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "Y",
                      availability: 7,
                      fareBasis: "Y1N0C9M1"
                    }
                  }
                ]
              }
            ],
            price: { total: "2902.70", totalTaxes: "203.70" },
            pricePerAdult: { total: "2902.70", totalTaxes: "203.70" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--1126877979",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "4",
                        at: "2019-08-01T17:50:00-04:00"
                      },
                      arrival: {
                        iataCode: "CDG",
                        terminal: "2E",
                        at: "2019-08-02T07:20:00+02:00"
                      },
                      carrierCode: "DL",
                      number: "262",
                      aircraft: { code: "333" },
                      operating: { carrierCode: "DL", number: "262" },
                      duration: "0DT7H30M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "B",
                      availability: 9,
                      fareBasis: "BFFWUS"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "CDG",
                        terminal: "2F",
                        at: "2019-08-02T12:15:00+02:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "2",
                        at: "2019-08-02T14:30:00+02:00"
                      },
                      carrierCode: "DL",
                      number: "8630",
                      aircraft: { code: "321" },
                      operating: { carrierCode: "AF", number: "8630" },
                      duration: "0DT2H15M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "B",
                      availability: 9,
                      fareBasis: "BFFWUS"
                    }
                  }
                ]
              }
            ],
            price: { total: "2271.66", totalTaxes: "224.66" },
            pricePerAdult: { total: "2271.66", totalTaxes: "224.66" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--231792773",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        at: "2019-08-01T20:00:00-04:00"
                      },
                      arrival: {
                        iataCode: "LHR",
                        at: "2019-08-02T08:05:00+01:00"
                      },
                      carrierCode: "6X",
                      number: "1201",
                      aircraft: { code: "744" },
                      operating: { carrierCode: "6X", number: "1201" },
                      duration: "0DT7H5M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "BUSINESS",
                      fareClass: "J",
                      availability: 9,
                      fareBasis: "J6XQSMIX"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "LHR",
                        at: "2019-08-02T10:30:00+01:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        at: "2019-08-02T13:00:00+02:00"
                      },
                      carrierCode: "6X",
                      number: "9931",
                      aircraft: { code: "320" },
                      operating: { carrierCode: "6X", number: "9931" },
                      duration: "0DT1H30M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "BUSINESS",
                      fareClass: "J",
                      availability: 9,
                      fareBasis: "J6XQSMIX"
                    }
                  }
                ]
              }
            ],
            price: { total: "366.14", totalTaxes: "48.14" },
            pricePerAdult: { total: "366.14", totalTaxes: "48.14" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763-937442493",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "LGA",
                        terminal: "B",
                        at: "2019-08-01T15:50:00-04:00"
                      },
                      arrival: {
                        iataCode: "YYZ",
                        terminal: "1",
                        at: "2019-08-01T17:30:00-04:00"
                      },
                      carrierCode: "AC",
                      number: "717",
                      aircraft: { code: "320" },
                      operating: { carrierCode: "AC", number: "717" },
                      duration: "0DT1H40M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "K",
                      availability: 9,
                      fareBasis: "K21Q0TG"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "YYZ",
                        terminal: "1",
                        at: "2019-08-01T18:45:00-04:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2019-08-02T07:55:00+02:00"
                      },
                      carrierCode: "AC",
                      number: "836",
                      aircraft: { code: "789" },
                      operating: { carrierCode: "AC", number: "836" },
                      duration: "0DT7H10M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "PREMIUM_ECONOMY",
                      fareClass: "O",
                      availability: 9,
                      fareBasis: "OFFEO"
                    }
                  }
                ]
              }
            ],
            price: { total: "2240.10", totalTaxes: "232.10" },
            pricePerAdult: { total: "2240.10", totalTaxes: "232.10" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763-875484514",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "5",
                        at: "2019-08-01T23:25:00-04:00"
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2019-08-02T11:15:00+01:00"
                      },
                      carrierCode: "TP",
                      number: "208",
                      aircraft: { code: "332" },
                      operating: { carrierCode: "TP", number: "208" },
                      duration: "0DT6H50M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "O",
                      availability: 9,
                      fareBasis: "OUSDSI0E"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2019-08-02T13:15:00+01:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "2",
                        at: "2019-08-02T15:30:00+02:00"
                      },
                      carrierCode: "TP",
                      number: "1028",
                      aircraft: { code: "319" },
                      operating: { carrierCode: "TP", number: "1028" },
                      duration: "0DT1H15M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "O",
                      availability: 9,
                      fareBasis: "OUSDSI0E"
                    }
                  }
                ]
              }
            ],
            price: { total: "124.29", totalTaxes: "108.29" },
            pricePerAdult: { total: "124.29", totalTaxes: "108.29" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--816986800",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "EWR",
                        terminal: "C",
                        at: "2019-08-01T20:15:00-04:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2019-08-02T09:30:00+02:00"
                      },
                      carrierCode: "LH",
                      number: "7970",
                      aircraft: { code: "777" },
                      operating: { carrierCode: "UA", number: "7970" },
                      duration: "0DT7H15M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "B",
                      availability: 6,
                      fareBasis: "B2E"
                    }
                  }
                ]
              }
            ],
            price: { total: "2588.20", totalTaxes: "221.20" },
            pricePerAdult: { total: "2588.20", totalTaxes: "221.20" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--610705762",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "4",
                        at: "2019-08-01T20:15:00-04:00"
                      },
                      arrival: {
                        iataCode: "CDG",
                        terminal: "2E",
                        at: "2019-08-02T09:45:00+02:00"
                      },
                      carrierCode: "DL",
                      number: "264",
                      aircraft: { code: "333" },
                      operating: { carrierCode: "DL", number: "264" },
                      duration: "0DT7H30M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "B",
                      availability: 9,
                      fareBasis: "BFFWUS"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "CDG",
                        terminal: "2F",
                        at: "2019-08-02T14:50:00+02:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "2",
                        at: "2019-08-02T16:55:00+02:00"
                      },
                      carrierCode: "DL",
                      number: "8334",
                      aircraft: { code: "319" },
                      operating: { carrierCode: "AF", number: "8334" },
                      duration: "0DT2H5M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "B",
                      availability: 9,
                      fareBasis: "BFFWUS"
                    }
                  }
                ]
              }
            ],
            price: { total: "2271.66", totalTaxes: "224.66" },
            pricePerAdult: { total: "2271.66", totalTaxes: "224.66" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763-1347498940",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "EWR",
                        terminal: "B",
                        at: "2019-08-01T17:45:00-04:00"
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2019-08-02T05:35:00+01:00"
                      },
                      carrierCode: "TP",
                      number: "202",
                      aircraft: { code: "332" },
                      operating: { carrierCode: "TP", number: "202" },
                      duration: "0DT6H50M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "E",
                      availability: 9,
                      fareBasis: "EUSDSI0E"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2019-08-02T13:15:00+01:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "2",
                        at: "2019-08-02T15:30:00+02:00"
                      },
                      carrierCode: "TP",
                      number: "1028",
                      aircraft: { code: "319" },
                      operating: { carrierCode: "TP", number: "1028" },
                      duration: "0DT1H15M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "E",
                      availability: 9,
                      fareBasis: "EUSDSI0E"
                    }
                  }
                ]
              }
            ],
            price: { total: "260.29", totalTaxes: "123.29" },
            pricePerAdult: { total: "260.29", totalTaxes: "123.29" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763-1867312335",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "4",
                        at: "2019-08-01T17:50:00-04:00"
                      },
                      arrival: {
                        iataCode: "CDG",
                        terminal: "2E",
                        at: "2019-08-02T07:20:00+02:00"
                      },
                      carrierCode: "DL",
                      number: "262",
                      aircraft: { code: "333" },
                      operating: { carrierCode: "DL", number: "262" },
                      duration: "0DT7H30M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "B",
                      availability: 9,
                      fareBasis: "BFFWUS"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "ORY",
                        terminal: "W",
                        at: "2019-08-02T10:25:00+02:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "2",
                        at: "2019-08-02T12:25:00+02:00"
                      },
                      carrierCode: "DL",
                      number: "6781",
                      aircraft: { code: "73H" },
                      operating: { carrierCode: "UX", number: "6781" },
                      duration: "0DT2H0M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "U",
                      availability: 9,
                      fareBasis: "BFFWUS"
                    }
                  }
                ]
              }
            ],
            price: { total: "2266.79", totalTaxes: "219.79" },
            pricePerAdult: { total: "2266.79", totalTaxes: "219.79" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--2019811353",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "EWR",
                        at: "2019-08-01T21:50:00-04:00"
                      },
                      arrival: {
                        iataCode: "LHR",
                        at: "2019-08-02T08:45:00+01:00"
                      },
                      carrierCode: "6X",
                      number: "188",
                      aircraft: { code: "777" },
                      operating: { carrierCode: "6X", number: "188" },
                      duration: "0DT5H55M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "BUSINESS",
                      fareClass: "J",
                      availability: 9,
                      fareBasis: "J6XQSMIX"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "LHR",
                        at: "2019-08-02T10:30:00+01:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        at: "2019-08-02T13:00:00+02:00"
                      },
                      carrierCode: "6X",
                      number: "9931",
                      aircraft: { code: "320" },
                      operating: { carrierCode: "6X", number: "9931" },
                      duration: "0DT1H30M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "BUSINESS",
                      fareClass: "J",
                      availability: 9,
                      fareBasis: "J6XQSMIX"
                    }
                  }
                ]
              }
            ],
            price: { total: "366.14", totalTaxes: "48.14" },
            pricePerAdult: { total: "366.14", totalTaxes: "48.14" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763-1455744055",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "LGA",
                        terminal: "B",
                        at: "2019-08-01T12:15:00-04:00"
                      },
                      arrival: {
                        iataCode: "YYZ",
                        terminal: "1",
                        at: "2019-08-01T13:55:00-04:00"
                      },
                      carrierCode: "AC",
                      number: "711",
                      aircraft: { code: "320" },
                      operating: { carrierCode: "AC", number: "711" },
                      duration: "0DT1H40M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "K",
                      availability: 9,
                      fareBasis: "K21Q0TG"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "YYZ",
                        terminal: "1",
                        at: "2019-08-01T18:45:00-04:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2019-08-02T07:55:00+02:00"
                      },
                      carrierCode: "AC",
                      number: "836",
                      aircraft: { code: "789" },
                      operating: { carrierCode: "AC", number: "836" },
                      duration: "0DT7H10M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "PREMIUM_ECONOMY",
                      fareClass: "O",
                      availability: 9,
                      fareBasis: "OFFEO"
                    }
                  }
                ]
              }
            ],
            price: { total: "2240.10", totalTaxes: "232.10" },
            pricePerAdult: { total: "2240.10", totalTaxes: "232.10" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--1708049589",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "7",
                        at: "2019-08-01T17:15:00-04:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "4S",
                        at: "2019-08-02T06:15:00+02:00"
                      },
                      carrierCode: "BA",
                      number: "4270",
                      aircraft: { code: "346" },
                      operating: { carrierCode: "IB", number: "4270" },
                      duration: "0DT7H0M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "Y",
                      availability: 9,
                      fareBasis: "Y1N0C9M1"
                    }
                  }
                ]
              }
            ],
            price: { total: "2914.70", totalTaxes: "203.70" },
            pricePerAdult: { total: "2914.70", totalTaxes: "203.70" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763-820657269",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "1",
                        at: "2019-08-01T21:20:00-04:00"
                      },
                      arrival: {
                        iataCode: "CMN",
                        terminal: "2",
                        at: "2019-08-02T09:10:00+01:00"
                      },
                      carrierCode: "AT",
                      number: "201",
                      aircraft: { code: "789" },
                      operating: { carrierCode: "AT", number: "201" },
                      duration: "0DT6H50M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "Q",
                      availability: 9,
                      fareBasis: "QA0W0USA"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "CMN",
                        terminal: "2",
                        at: "2019-08-02T15:45:00+01:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "4S",
                        at: "2019-08-02T18:35:00+02:00"
                      },
                      carrierCode: "AT",
                      number: "970",
                      aircraft: { code: "738" },
                      operating: { carrierCode: "AT", number: "970" },
                      duration: "0DT1H50M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "Q",
                      availability: 9,
                      fareBasis: "QA0W0USA"
                    }
                  }
                ]
              }
            ],
            price: { total: "829.81", totalTaxes: "235.81" },
            pricePerAdult: { total: "829.81", totalTaxes: "235.81" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763-954254055",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "5",
                        at: "2019-08-01T17:20:00-04:00"
                      },
                      arrival: {
                        iataCode: "DUB",
                        terminal: "2",
                        at: "2019-08-02T04:50:00+01:00"
                      },
                      carrierCode: "EI",
                      number: "104",
                      aircraft: { code: "330" },
                      operating: { carrierCode: "EI", number: "104" },
                      duration: "0DT6H30M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "M",
                      availability: 9,
                      fareBasis: "MH1NS"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "DUB",
                        terminal: "2",
                        at: "2019-08-02T06:15:00+01:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2019-08-02T09:50:00+02:00"
                      },
                      carrierCode: "EI",
                      number: "592",
                      aircraft: { code: "320" },
                      operating: { carrierCode: "EI", number: "592" },
                      duration: "0DT2H35M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "W",
                      availability: 9,
                      fareBasis: "WOW26GDS"
                    }
                  }
                ]
              }
            ],
            price: { total: "885.82", totalTaxes: "69.82" },
            pricePerAdult: { total: "885.82", totalTaxes: "69.82" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763-452521619",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "1",
                        at: "2019-08-01T18:45:00-04:00"
                      },
                      arrival: {
                        iataCode: "CDG",
                        terminal: "2E",
                        at: "2019-08-02T08:10:00+02:00"
                      },
                      carrierCode: "DL",
                      number: "1015",
                      aircraft: { code: "388" },
                      operating: { carrierCode: "AF", number: "1015" },
                      duration: "0DT7H25M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "B",
                      availability: 9,
                      fareBasis: "BFFWUS"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "CDG",
                        terminal: "2F",
                        at: "2019-08-02T12:15:00+02:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "2",
                        at: "2019-08-02T14:30:00+02:00"
                      },
                      carrierCode: "DL",
                      number: "8630",
                      aircraft: { code: "321" },
                      operating: { carrierCode: "AF", number: "8630" },
                      duration: "0DT2H15M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "B",
                      availability: 9,
                      fareBasis: "BFFWUS"
                    }
                  }
                ]
              }
            ],
            price: { total: "2271.66", totalTaxes: "224.66" },
            pricePerAdult: { total: "2271.66", totalTaxes: "224.66" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--606558740",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "7",
                        at: "2019-08-01T20:00:00-04:00"
                      },
                      arrival: {
                        iataCode: "LHR",
                        terminal: "4",
                        at: "2019-08-02T08:05:00+01:00"
                      },
                      carrierCode: "6X",
                      number: "176",
                      aircraft: { code: "744" },
                      operating: { carrierCode: "6X", number: "176" },
                      duration: "0DT7H5M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "BUSINESS",
                      fareClass: "J",
                      availability: 9,
                      fareBasis: "J6XQSMIX"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "LHR",
                        at: "2019-08-02T10:30:00+01:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        at: "2019-08-02T13:00:00+02:00"
                      },
                      carrierCode: "6X",
                      number: "9931",
                      aircraft: { code: "320" },
                      operating: { carrierCode: "6X", number: "9931" },
                      duration: "0DT1H30M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "BUSINESS",
                      fareClass: "J",
                      availability: 9,
                      fareBasis: "J6XQSMIX"
                    }
                  }
                ]
              }
            ],
            price: { total: "366.14", totalTaxes: "48.14" },
            pricePerAdult: { total: "366.14", totalTaxes: "48.14" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763-614225555",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "4",
                        at: "2019-08-01T22:05:00-04:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2019-08-02T11:30:00+02:00"
                      },
                      carrierCode: "UX",
                      number: "92",
                      aircraft: { code: "332" },
                      operating: { carrierCode: "UX", number: "92" },
                      duration: "0DT7H25M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "M",
                      availability: 9,
                      fareBasis: "MYYOAE"
                    }
                  }
                ]
              }
            ],
            price: { total: "1947.70", totalTaxes: "203.70" },
            pricePerAdult: { total: "1947.70", totalTaxes: "203.70" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763-569522731",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "4",
                        at: "2019-08-01T20:15:00-04:00"
                      },
                      arrival: {
                        iataCode: "CDG",
                        terminal: "2E",
                        at: "2019-08-02T09:45:00+02:00"
                      },
                      carrierCode: "DL",
                      number: "264",
                      aircraft: { code: "333" },
                      operating: { carrierCode: "DL", number: "264" },
                      duration: "0DT7H30M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "B",
                      availability: 9,
                      fareBasis: "BFFWUS"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "CDG",
                        terminal: "2F",
                        at: "2019-08-02T12:15:00+02:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "2",
                        at: "2019-08-02T14:30:00+02:00"
                      },
                      carrierCode: "DL",
                      number: "8630",
                      aircraft: { code: "321" },
                      operating: { carrierCode: "AF", number: "8630" },
                      duration: "0DT2H15M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "B",
                      availability: 9,
                      fareBasis: "BFFWUS"
                    }
                  }
                ]
              }
            ],
            price: { total: "2271.66", totalTaxes: "224.66" },
            pricePerAdult: { total: "2271.66", totalTaxes: "224.66" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763-1546356137",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "EWR",
                        terminal: "C",
                        at: "2019-08-01T20:05:00-04:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2019-08-02T09:20:00+02:00"
                      },
                      carrierCode: "UA",
                      number: "51",
                      aircraft: { code: "777" },
                      operating: { carrierCode: "UA", number: "51" },
                      duration: "0DT7H15M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "B",
                      availability: 9,
                      fareBasis: "B2E"
                    }
                  }
                ]
              }
            ],
            price: { total: "2570.70", totalTaxes: "203.70" },
            pricePerAdult: { total: "2570.70", totalTaxes: "203.70" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763-1523775378",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "4",
                        at: "2019-08-01T19:35:00-04:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2019-08-02T09:15:00+02:00"
                      },
                      carrierCode: "AF",
                      number: "3679",
                      aircraft: { code: "764" },
                      operating: { carrierCode: "DL", number: "3679" },
                      duration: "0DT7H40M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "B",
                      availability: 9,
                      fareBasis: "BFFWUS"
                    }
                  }
                ]
              }
            ],
            price: { total: "2263.70", totalTaxes: "216.70" },
            pricePerAdult: { total: "2263.70", totalTaxes: "216.70" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--2079564477",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "5",
                        at: "2019-08-01T23:25:00-04:00"
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2019-08-02T11:15:00+01:00"
                      },
                      carrierCode: "TP",
                      number: "208",
                      aircraft: { code: "332" },
                      operating: { carrierCode: "TP", number: "208" },
                      duration: "0DT6H50M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "O",
                      availability: 9,
                      fareBasis: "OUSDSI0E"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2019-08-02T21:35:00+01:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "2",
                        at: "2019-08-02T23:50:00+02:00"
                      },
                      carrierCode: "TP",
                      number: "1022",
                      aircraft: { code: "319" },
                      operating: { carrierCode: "TP", number: "1022" },
                      duration: "0DT1H15M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "O",
                      availability: 9,
                      fareBasis: "OUSDSI0E"
                    }
                  }
                ]
              }
            ],
            price: { total: "124.29", totalTaxes: "108.29" },
            pricePerAdult: { total: "124.29", totalTaxes: "108.29" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763-1759922171",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "7",
                        at: "2019-08-01T00:30:00-04:00"
                      },
                      arrival: {
                        iataCode: "KBP",
                        at: "2019-08-01T16:20:00+03:00"
                      },
                      carrierCode: "PS",
                      number: "232",
                      aircraft: { code: "777" },
                      operating: { carrierCode: "PS", number: "232" },
                      duration: "0DT8H50M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "S",
                      availability: 9,
                      fareBasis: "SH1FAP5"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "KBP",
                        at: "2019-08-01T20:40:00+03:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "4S",
                        at: "2019-08-02T00:10:00+02:00"
                      },
                      carrierCode: "PS",
                      number: "945",
                      aircraft: { code: "738" },
                      operating: { carrierCode: "PS", number: "945" },
                      duration: "0DT4H30M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "S",
                      availability: 9,
                      fareBasis: "SH1FAP5"
                    }
                  }
                ]
              }
            ],
            price: { total: "980.20", totalTaxes: "220.20" },
            pricePerAdult: { total: "980.20", totalTaxes: "220.20" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763-974606255",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "EWR",
                        terminal: "C",
                        at: "2019-08-01T20:15:00-04:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2019-08-02T09:30:00+02:00"
                      },
                      carrierCode: "SN",
                      number: "9027",
                      aircraft: { code: "777" },
                      operating: { carrierCode: "UA", number: "9027" },
                      duration: "0DT7H15M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "B",
                      availability: 4,
                      fareBasis: "B2E"
                    }
                  }
                ]
              }
            ],
            price: { total: "2588.20", totalTaxes: "221.20" },
            pricePerAdult: { total: "2588.20", totalTaxes: "221.20" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763-1710796863",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "7",
                        at: "2019-08-01T17:15:00-04:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "4S",
                        at: "2019-08-02T06:15:00+02:00"
                      },
                      carrierCode: "IB",
                      number: "6250",
                      aircraft: { code: "346" },
                      operating: { carrierCode: "IB", number: "6250" },
                      duration: "0DT7H0M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "Y",
                      availability: 9,
                      fareBasis: "Y1N0C9M1"
                    }
                  }
                ]
              }
            ],
            price: { total: "2914.70", totalTaxes: "203.70" },
            pricePerAdult: { total: "2914.70", totalTaxes: "203.70" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--1264198180",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "4",
                        at: "2019-08-01T17:50:00-04:00"
                      },
                      arrival: {
                        iataCode: "CDG",
                        terminal: "2E",
                        at: "2019-08-02T07:20:00+02:00"
                      },
                      carrierCode: "DL",
                      number: "262",
                      aircraft: { code: "333" },
                      operating: { carrierCode: "DL", number: "262" },
                      duration: "0DT7H30M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "B",
                      availability: 9,
                      fareBasis: "BFFWUS"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "CDG",
                        terminal: "2F",
                        at: "2019-08-02T09:05:00+02:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "2",
                        at: "2019-08-02T11:10:00+02:00"
                      },
                      carrierCode: "DL",
                      number: "8374",
                      aircraft: { code: "321" },
                      operating: { carrierCode: "AF", number: "8374" },
                      duration: "0DT2H5M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "B",
                      availability: 9,
                      fareBasis: "BFFWUS"
                    }
                  }
                ]
              }
            ],
            price: { total: "2271.66", totalTaxes: "224.66" },
            pricePerAdult: { total: "2271.66", totalTaxes: "224.66" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--280507170",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "8",
                        at: "2019-08-01T18:55:00-04:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "4S",
                        at: "2019-08-02T08:10:00+02:00"
                      },
                      carrierCode: "AY",
                      number: "4008",
                      aircraft: { code: "772" },
                      operating: { carrierCode: "AA", number: "4008" },
                      duration: "0DT7H15M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "Y",
                      availability: 9,
                      fareBasis: "Y1N0C9M1"
                    }
                  }
                ]
              }
            ],
            price: { total: "2902.70", totalTaxes: "203.70" },
            pricePerAdult: { total: "2902.70", totalTaxes: "203.70" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--169916866",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        at: "2019-08-01T20:00:00-04:00"
                      },
                      arrival: {
                        iataCode: "LHR",
                        at: "2019-08-02T08:05:00+01:00"
                      },
                      carrierCode: "6X",
                      number: "1226",
                      aircraft: { code: "744" },
                      operating: { carrierCode: "6X", number: "1226" },
                      duration: "0DT7H5M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "BUSINESS",
                      fareClass: "J",
                      availability: 9,
                      fareBasis: "J6XQSMIX"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "LHR",
                        at: "2019-08-02T10:30:00+01:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        at: "2019-08-02T13:00:00+02:00"
                      },
                      carrierCode: "6X",
                      number: "9931",
                      aircraft: { code: "320" },
                      operating: { carrierCode: "6X", number: "9931" },
                      duration: "0DT1H30M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "BUSINESS",
                      fareClass: "J",
                      availability: 9,
                      fareBasis: "J6XQSMIX"
                    }
                  }
                ]
              }
            ],
            price: { total: "366.14", totalTaxes: "48.14" },
            pricePerAdult: { total: "366.14", totalTaxes: "48.14" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--1130208453",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "7",
                        at: "2019-08-01T17:15:00-04:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "4S",
                        at: "2019-08-02T06:15:00+02:00"
                      },
                      carrierCode: "AY",
                      number: "5654",
                      aircraft: { code: "346" },
                      operating: { carrierCode: "IB", number: "5654" },
                      duration: "0DT7H0M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "Y",
                      availability: 9,
                      fareBasis: "Y1N0C9M1"
                    }
                  }
                ]
              }
            ],
            price: { total: "2902.70", totalTaxes: "203.70" },
            pricePerAdult: { total: "2902.70", totalTaxes: "203.70" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--1798025904",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "EWR",
                        terminal: "A",
                        at: "2019-08-01T14:25:00-04:00"
                      },
                      arrival: {
                        iataCode: "YYZ",
                        terminal: "1",
                        at: "2019-08-01T16:02:00-04:00"
                      },
                      carrierCode: "AC",
                      number: "7657",
                      aircraft: { code: "E75" },
                      operating: { carrierCode: "AC", number: "7657" },
                      duration: "0DT1H37M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "A",
                      availability: 9,
                      fareBasis: "A21Q1TG"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "YYZ",
                        terminal: "1",
                        at: "2019-08-01T18:45:00-04:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2019-08-02T07:55:00+02:00"
                      },
                      carrierCode: "AC",
                      number: "836",
                      aircraft: { code: "789" },
                      operating: { carrierCode: "AC", number: "836" },
                      duration: "0DT7H10M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "PREMIUM_ECONOMY",
                      fareClass: "O",
                      availability: 9,
                      fareBasis: "OFFEO"
                    }
                  }
                ]
              }
            ],
            price: { total: "2273.10", totalTaxes: "232.10" },
            pricePerAdult: { total: "2273.10", totalTaxes: "232.10" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--416329371",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        at: "2019-08-01T20:00:00-04:00"
                      },
                      arrival: {
                        iataCode: "LHR",
                        at: "2019-08-02T08:05:00+01:00"
                      },
                      carrierCode: "6X",
                      number: "172",
                      aircraft: { code: "744" },
                      operating: { carrierCode: "6X", number: "172" },
                      duration: "0DT7H5M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "BUSINESS",
                      fareClass: "J",
                      availability: 9,
                      fareBasis: "J6XQSMIX"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "LHR",
                        at: "2019-08-02T10:30:00+01:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        at: "2019-08-02T13:00:00+02:00"
                      },
                      carrierCode: "6X",
                      number: "9931",
                      aircraft: { code: "320" },
                      operating: { carrierCode: "6X", number: "9931" },
                      duration: "0DT1H30M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "BUSINESS",
                      fareClass: "J",
                      availability: 9,
                      fareBasis: "J6XQSMIX"
                    }
                  }
                ]
              }
            ],
            price: { total: "366.14", totalTaxes: "48.14" },
            pricePerAdult: { total: "366.14", totalTaxes: "48.14" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--637103463",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        terminal: "4",
                        at: "2019-08-01T22:05:00-04:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2019-08-02T11:30:00+02:00"
                      },
                      carrierCode: "DL",
                      number: "6744",
                      aircraft: { code: "332" },
                      operating: { carrierCode: "UX", number: "6744" },
                      duration: "0DT7H25M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "B",
                      availability: 9,
                      fareBasis: "BFFWUS"
                    }
                  }
                ]
              }
            ],
            price: { total: "2250.70", totalTaxes: "203.70" },
            pricePerAdult: { total: "2250.70", totalTaxes: "203.70" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--308374463",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "EWR",
                        terminal: "B",
                        at: "2019-08-01T17:45:00-04:00"
                      },
                      arrival: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2019-08-02T05:35:00+01:00"
                      },
                      carrierCode: "TP",
                      number: "202",
                      aircraft: { code: "332" },
                      operating: { carrierCode: "TP", number: "202" },
                      duration: "0DT6H50M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "E",
                      availability: 9,
                      fareBasis: "EUSDSI0E"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "LIS",
                        terminal: "1",
                        at: "2019-08-02T06:55:00+01:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "2",
                        at: "2019-08-02T09:10:00+02:00"
                      },
                      carrierCode: "TP",
                      number: "1026",
                      aircraft: { code: "319" },
                      operating: { carrierCode: "TP", number: "1026" },
                      duration: "0DT1H15M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "E",
                      availability: 9,
                      fareBasis: "EUSDSI0E"
                    }
                  }
                ]
              }
            ],
            price: { total: "260.29", totalTaxes: "123.29" },
            pricePerAdult: { total: "260.29", totalTaxes: "123.29" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--2006711749",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "EWR",
                        terminal: "B",
                        at: "2019-08-01T17:25:00-04:00"
                      },
                      arrival: {
                        iataCode: "DUB",
                        terminal: "2",
                        at: "2019-08-02T04:50:00+01:00"
                      },
                      carrierCode: "EI",
                      number: "100",
                      aircraft: { code: "330" },
                      operating: { carrierCode: "EI", number: "100" },
                      duration: "0DT6H25M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "M",
                      availability: 9,
                      fareBasis: "MH1NS"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "DUB",
                        terminal: "2",
                        at: "2019-08-02T06:15:00+01:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        terminal: "1",
                        at: "2019-08-02T09:50:00+02:00"
                      },
                      carrierCode: "EI",
                      number: "592",
                      aircraft: { code: "320" },
                      operating: { carrierCode: "EI", number: "592" },
                      duration: "0DT2H35M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "ECONOMY",
                      fareClass: "W",
                      availability: 9,
                      fareBasis: "WOW26GDS"
                    }
                  }
                ]
              }
            ],
            price: { total: "885.82", totalTaxes: "69.82" },
            pricePerAdult: { total: "885.82", totalTaxes: "69.82" }
          }
        ]
      },
      {
        type: "flight-offer",
        id: "1548417551763--1298886572",
        offerItems: [
          {
            services: [
              {
                segments: [
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "JFK",
                        at: "2019-08-01T20:00:00-04:00"
                      },
                      arrival: {
                        iataCode: "LHR",
                        at: "2019-08-02T08:05:00+01:00"
                      },
                      carrierCode: "6X",
                      number: "528",
                      aircraft: { code: "747" },
                      operating: { carrierCode: "6X", number: "528" },
                      duration: "0DT7H5M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "BUSINESS",
                      fareClass: "J",
                      availability: 9,
                      fareBasis: "J6XQSMIX"
                    }
                  },
                  {
                    flightSegment: {
                      departure: {
                        iataCode: "LHR",
                        at: "2019-08-02T10:30:00+01:00"
                      },
                      arrival: {
                        iataCode: "MAD",
                        at: "2019-08-02T13:00:00+02:00"
                      },
                      carrierCode: "6X",
                      number: "9931",
                      aircraft: { code: "320" },
                      operating: { carrierCode: "6X", number: "9931" },
                      duration: "0DT1H30M"
                    },
                    pricingDetailPerAdult: {
                      travelClass: "BUSINESS",
                      fareClass: "J",
                      availability: 9,
                      fareBasis: "J6XQSMIX"
                    }
                  }
                ]
              }
            ],
            price: { total: "366.14", totalTaxes: "48.14" },
            pricePerAdult: { total: "366.14", totalTaxes: "48.14" }
          }
        ]
      }
    ],
    dictionaries: {
      carriers: {
        AA: "AMERICAN AIRLINES",
        KL: "KLM ROYAL DUTCH AIRLINES",
        "6X": "AMADEUS SIX",
        AC: "AIR CANADA",
        PS: "UKRAINE INTL AIRLINES",
        UX: "AIR EUROPA",
        EI: "AER LINGUS",
        OS: "AUSTRIAN AIRLINES",
        AF: "AIR FRANCE",
        DL: "DELTA AIR LINES",
        UA: "UNITED AIRLINES",
        AT: "ROYAL AIR MAROC",
        TK: "TURKISH AIRLINES",
        AY: "FINNAIR",
        IB: "IBERIA",
        SN: "BRUSSELS AIRLINES",
        LH: "LUFTHANSA",
        TP: "TAP PORTUGAL",
        BA: "BRITISH AIRWAYS"
      },
      currencies: { USD: "US DOLLAR" },
      aircraft: {
        "319": "AIRBUS INDUSTRIE A319",
        "320": "AIRBUS INDUSTRIE A320-100/200",
        "321": "AIRBUS INDUSTRIE A321",
        "330": "AIRBUS INDUSTRIE A330",
        "332": "AIRBUS INDUSTRIE A330-200",
        "333": "AIRBUS INDUSTRIE A330-300",
        "340": "AIRBUS INDUSTRIE A340",
        "343": "AIRBUS INDUSTRIE A340-300",
        "346": "AIRBUS INDUSTRIE A340-600",
        "388": "AIRBUS INDUSTRIE A380-800",
        "737": "BOEING 737 ALL SERIES PASSENGER",
        "738": "BOEING 737-800",
        "744": "BOEING 747-400",
        "747": "BOEING 747 ALL SERIES PASSENGER",
        "764": "BOEING 767-400",
        "772": "BOEING 777-200/200ER",
        "777": "BOEING 777-200/300",
        "789": "BOEING 787-9",
        "32A": "AIRBUS INDUSTRIE A320 SHARKLETS",
        E75: "EMBRAER 175",
        "73H": "BOEING 737-800 (WINGLETS)",
        "77W": "BOEING 777-300ER",
        "76W": "BOEING 767-300"
      },
      locations: {
        EWR: { subType: "AIRPORT", detailedName: "NEWARK LIBERTY INTL" },
        CMN: { subType: "AIRPORT", detailedName: "MOHAMMED V" },
        CDG: { subType: "AIRPORT", detailedName: "CHARLES DE GAULLE" },
        LGA: { subType: "AIRPORT", detailedName: "LAGUARDIA" },
        IST: { subType: "AIRPORT", detailedName: "ATATURK" },
        BCN: { subType: "AIRPORT", detailedName: "AIRPORT" },
        JFK: { subType: "AIRPORT", detailedName: "JOHN F KENNEDY INTL" },
        DUB: { subType: "AIRPORT", detailedName: "DUBLIN INTERNATIONAL" },
        MAD: { subType: "AIRPORT", detailedName: "ADOLFO SUAREZ BARAJAS" },
        VIE: { subType: "AIRPORT", detailedName: "VIENNA INTERNATIONAL" },
        FRA: { subType: "AIRPORT", detailedName: "FRANKFURT INTL" },
        LHR: { subType: "AIRPORT", detailedName: "HEATHROW" },
        LIS: { subType: "AIRPORT", detailedName: "AIRPORT" },
        ORY: { subType: "AIRPORT", detailedName: "ORLY" },
        KBP: { subType: "AIRPORT", detailedName: "BORYSPIL INTL" },
        YYZ: { subType: "AIRPORT", detailedName: "LESTER B. PEARSON INTL" }
      }
    },
    meta: {
      links: {
        self:
          "https://test.api.amadeus.com/v1/shopping/flight-offers?origin=NYC&destination=MAD&departureDate=2019-08-01&adults=1&nonStop=false&currency=USD"
      },
      currency: "USD",
      defaults: { nonStop: false, adults: 1 }
    }
  },
  data: [
    {
      type: "flight-offer",
      id: "1548417551763-1976864240",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "1",
                      at: "2019-08-01T19:05:00-04:00"
                    },
                    arrival: {
                      iataCode: "IST",
                      terminal: "I",
                      at: "2019-08-02T11:55:00+03:00"
                    },
                    carrierCode: "TK",
                    number: "2",
                    aircraft: { code: "77W" },
                    operating: { carrierCode: "TK", number: "2" },
                    duration: "0DT9H50M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "S",
                    availability: 9,
                    fareBasis: "SHV3PXOW"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "IST",
                      terminal: "I",
                      at: "2019-08-02T13:20:00+03:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "1",
                      at: "2019-08-02T16:45:00+02:00"
                    },
                    carrierCode: "TK",
                    number: "1859",
                    aircraft: { code: "333" },
                    operating: { carrierCode: "TK", number: "1859" },
                    duration: "0DT4H25M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "S",
                    availability: 9,
                    fareBasis: "SHV3PXOW"
                  }
                }
              ]
            }
          ],
          price: { total: "949.40", totalTaxes: "232.40" },
          pricePerAdult: { total: "949.40", totalTaxes: "232.40" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--1718739878",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "5",
                      at: "2019-08-01T23:25:00-04:00"
                    },
                    arrival: {
                      iataCode: "LIS",
                      terminal: "1",
                      at: "2019-08-02T11:15:00+01:00"
                    },
                    carrierCode: "TP",
                    number: "208",
                    aircraft: { code: "332" },
                    operating: { carrierCode: "TP", number: "208" },
                    duration: "0DT6H50M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "O",
                    availability: 9,
                    fareBasis: "OUSDSI0E"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "LIS",
                      terminal: "1",
                      at: "2019-08-02T18:55:00+01:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "2",
                      at: "2019-08-02T21:15:00+02:00"
                    },
                    carrierCode: "TP",
                    number: "1018",
                    aircraft: { code: "319" },
                    operating: { carrierCode: "TP", number: "1018" },
                    duration: "0DT1H20M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "O",
                    availability: 9,
                    fareBasis: "OUSDSI0E"
                  }
                }
              ]
            }
          ],
          price: { total: "124.29", totalTaxes: "108.29" },
          pricePerAdult: { total: "124.29", totalTaxes: "108.29" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--826100410",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      at: "2019-08-01T15:00:00-04:00"
                    },
                    arrival: {
                      iataCode: "LHR",
                      at: "2019-08-01T23:58:00+01:00"
                    },
                    carrierCode: "6X",
                    number: "9306",
                    aircraft: { code: "744" },
                    operating: { carrierCode: "6X", number: "9306" },
                    duration: "0DT3H58M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "BUSINESS",
                    fareClass: "J",
                    availability: 9,
                    fareBasis: "J6XQSMIX"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "LHR",
                      terminal: "3",
                      at: "2019-08-02T08:30:00+01:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "1",
                      at: "2019-08-02T11:50:00+02:00"
                    },
                    carrierCode: "6X",
                    number: "7100",
                    aircraft: { code: "340" },
                    operating: { carrierCode: "6X", number: "7100" },
                    duration: "0DT2H20M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "BUSINESS",
                    fareClass: "J",
                    availability: 9,
                    fareBasis: "J6XQSMIX"
                  }
                }
              ]
            }
          ],
          price: { total: "366.14", totalTaxes: "48.14" },
          pricePerAdult: { total: "366.14", totalTaxes: "48.14" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--784176114",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "4",
                      at: "2019-08-01T20:10:00-04:00"
                    },
                    arrival: {
                      iataCode: "BCN",
                      terminal: "1",
                      at: "2019-08-02T10:05:00+02:00"
                    },
                    carrierCode: "DL",
                    number: "476",
                    aircraft: { code: "333" },
                    operating: { carrierCode: "DL", number: "476" },
                    duration: "0DT7H55M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "B",
                    availability: 9,
                    fareBasis: "BFFWUS"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "BCN",
                      terminal: "1",
                      at: "2019-08-02T12:00:00+02:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "2",
                      at: "2019-08-02T13:30:00+02:00"
                    },
                    carrierCode: "DL",
                    number: "6767",
                    aircraft: { code: "332" },
                    operating: { carrierCode: "UX", number: "6767" },
                    duration: "0DT1H30M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "V",
                    availability: 9,
                    fareBasis: "BFFWUS"
                  }
                }
              ]
            }
          ],
          price: { total: "2264.84", totalTaxes: "217.84" },
          pricePerAdult: { total: "2264.84", totalTaxes: "217.84" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--284179311",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "1",
                      at: "2019-08-01T17:40:00-04:00"
                    },
                    arrival: {
                      iataCode: "VIE",
                      at: "2019-08-02T08:15:00+02:00"
                    },
                    carrierCode: "OS",
                    number: "88",
                    aircraft: { code: "76W" },
                    operating: { carrierCode: "OS", number: "88" },
                    duration: "0DT8H35M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "B",
                    availability: 9,
                    fareBasis: "B2E"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "VIE",
                      at: "2019-08-02T10:10:00+02:00"
                    },
                    arrival: {
                      iataCode: "FRA",
                      terminal: "1",
                      at: "2019-08-02T11:40:00+02:00"
                    },
                    carrierCode: "OS",
                    number: "129",
                    aircraft: { code: "320" },
                    operating: { carrierCode: "OS", number: "129" },
                    duration: "0DT1H30M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "B",
                    availability: 9,
                    fareBasis: "B2E"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "FRA",
                      terminal: "1",
                      at: "2019-08-02T13:10:00+02:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "2",
                      at: "2019-08-02T15:40:00+02:00"
                    },
                    carrierCode: "OS",
                    number: "7461",
                    aircraft: { code: "32A" },
                    operating: { carrierCode: "LH", number: "7461" },
                    duration: "0DT2H30M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "B",
                    availability: 9,
                    fareBasis: "B2E"
                  }
                }
              ]
            }
          ],
          price: { total: "2643.58", totalTaxes: "276.58" },
          pricePerAdult: { total: "2643.58", totalTaxes: "276.58" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--6467004",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      at: "2019-08-01T20:00:00-04:00"
                    },
                    arrival: {
                      iataCode: "LHR",
                      at: "2019-08-02T08:05:00+01:00"
                    },
                    carrierCode: "6X",
                    number: "3806",
                    aircraft: { code: "744" },
                    operating: { carrierCode: "6X", number: "3806" },
                    duration: "0DT7H5M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "BUSINESS",
                    fareClass: "J",
                    availability: 9,
                    fareBasis: "J6XQSMIX"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "LHR",
                      at: "2019-08-02T10:30:00+01:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      at: "2019-08-02T13:00:00+02:00"
                    },
                    carrierCode: "6X",
                    number: "9931",
                    aircraft: { code: "320" },
                    operating: { carrierCode: "6X", number: "9931" },
                    duration: "0DT1H30M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "BUSINESS",
                    fareClass: "J",
                    availability: 9,
                    fareBasis: "J6XQSMIX"
                  }
                }
              ]
            }
          ],
          price: { total: "366.14", totalTaxes: "48.14" },
          pricePerAdult: { total: "366.14", totalTaxes: "48.14" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--1062573344",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "LGA",
                      terminal: "B",
                      at: "2019-08-01T11:15:00-04:00"
                    },
                    arrival: {
                      iataCode: "YYZ",
                      terminal: "1",
                      at: "2019-08-01T12:55:00-04:00"
                    },
                    carrierCode: "AC",
                    number: "709",
                    aircraft: { code: "320" },
                    operating: { carrierCode: "AC", number: "709" },
                    duration: "0DT1H40M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "K",
                    availability: 9,
                    fareBasis: "K21Q0TG"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "YYZ",
                      terminal: "1",
                      at: "2019-08-01T18:45:00-04:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "1",
                      at: "2019-08-02T07:55:00+02:00"
                    },
                    carrierCode: "AC",
                    number: "836",
                    aircraft: { code: "789" },
                    operating: { carrierCode: "AC", number: "836" },
                    duration: "0DT7H10M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "PREMIUM_ECONOMY",
                    fareClass: "O",
                    availability: 9,
                    fareBasis: "OFFEO"
                  }
                }
              ]
            }
          ],
          price: { total: "2240.10", totalTaxes: "232.10" },
          pricePerAdult: { total: "2240.10", totalTaxes: "232.10" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--1466052741",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "LGA",
                      terminal: "B",
                      at: "2019-08-01T14:40:00-04:00"
                    },
                    arrival: {
                      iataCode: "YYZ",
                      terminal: "1",
                      at: "2019-08-01T16:20:00-04:00"
                    },
                    carrierCode: "AC",
                    number: "715",
                    aircraft: { code: "320" },
                    operating: { carrierCode: "AC", number: "715" },
                    duration: "0DT1H40M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "K",
                    availability: 9,
                    fareBasis: "K21Q0TG"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "YYZ",
                      terminal: "1",
                      at: "2019-08-01T18:45:00-04:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "1",
                      at: "2019-08-02T07:55:00+02:00"
                    },
                    carrierCode: "AC",
                    number: "836",
                    aircraft: { code: "789" },
                    operating: { carrierCode: "AC", number: "836" },
                    duration: "0DT7H10M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "PREMIUM_ECONOMY",
                    fareClass: "O",
                    availability: 9,
                    fareBasis: "OFFEO"
                  }
                }
              ]
            }
          ],
          price: { total: "2240.10", totalTaxes: "232.10" },
          pricePerAdult: { total: "2240.10", totalTaxes: "232.10" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--1426825265",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "4",
                      at: "2019-08-01T19:35:00-04:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "1",
                      at: "2019-08-02T09:15:00+02:00"
                    },
                    carrierCode: "DL",
                    number: "126",
                    aircraft: { code: "764" },
                    operating: { carrierCode: "DL", number: "126" },
                    duration: "0DT7H40M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "B",
                    availability: 9,
                    fareBasis: "BFFWUS"
                  }
                }
              ]
            }
          ],
          price: { total: "2250.70", totalTaxes: "203.70" },
          pricePerAdult: { total: "2250.70", totalTaxes: "203.70" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--1343107158",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "EWR",
                      terminal: "A",
                      at: "2019-08-01T12:50:00-04:00"
                    },
                    arrival: {
                      iataCode: "YYZ",
                      terminal: "1",
                      at: "2019-08-01T14:27:00-04:00"
                    },
                    carrierCode: "AC",
                    number: "7655",
                    aircraft: { code: "E75" },
                    operating: { carrierCode: "AC", number: "7655" },
                    duration: "0DT1H37M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "A",
                    availability: 9,
                    fareBasis: "A21Q1TG"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "YYZ",
                      terminal: "1",
                      at: "2019-08-01T18:45:00-04:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "1",
                      at: "2019-08-02T07:55:00+02:00"
                    },
                    carrierCode: "AC",
                    number: "836",
                    aircraft: { code: "789" },
                    operating: { carrierCode: "AC", number: "836" },
                    duration: "0DT7H10M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "PREMIUM_ECONOMY",
                    fareClass: "O",
                    availability: 9,
                    fareBasis: "OFFEO"
                  }
                }
              ]
            }
          ],
          price: { total: "2273.10", totalTaxes: "232.10" },
          pricePerAdult: { total: "2273.10", totalTaxes: "232.10" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--847297117",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "EWR",
                      terminal: "B",
                      at: "2019-08-01T17:45:00-04:00"
                    },
                    arrival: {
                      iataCode: "LIS",
                      terminal: "1",
                      at: "2019-08-02T05:35:00+01:00"
                    },
                    carrierCode: "TP",
                    number: "202",
                    aircraft: { code: "332" },
                    operating: { carrierCode: "TP", number: "202" },
                    duration: "0DT6H50M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "E",
                    availability: 9,
                    fareBasis: "EUSDSI0E"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "LIS",
                      terminal: "1",
                      at: "2019-08-02T16:15:00+01:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "2",
                      at: "2019-08-02T18:30:00+02:00"
                    },
                    carrierCode: "TP",
                    number: "1024",
                    aircraft: { code: "319" },
                    operating: { carrierCode: "TP", number: "1024" },
                    duration: "0DT1H15M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "E",
                    availability: 9,
                    fareBasis: "EUSDSI0E"
                  }
                }
              ]
            }
          ],
          price: { total: "260.29", totalTaxes: "123.29" },
          pricePerAdult: { total: "260.29", totalTaxes: "123.29" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763-711444366",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "1",
                      at: "2019-08-01T12:30:00-04:00"
                    },
                    arrival: {
                      iataCode: "IST",
                      terminal: "I",
                      at: "2019-08-02T05:15:00+03:00"
                    },
                    carrierCode: "TK",
                    number: "4",
                    aircraft: { code: "333" },
                    operating: { carrierCode: "TK", number: "4" },
                    duration: "0DT9H45M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "S",
                    availability: 9,
                    fareBasis: "SHV3PXOW"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "IST",
                      terminal: "I",
                      at: "2019-08-02T07:15:00+03:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "1",
                      at: "2019-08-02T10:40:00+02:00"
                    },
                    carrierCode: "TK",
                    number: "1857",
                    aircraft: { code: "333" },
                    operating: { carrierCode: "TK", number: "1857" },
                    duration: "0DT4H25M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "S",
                    availability: 9,
                    fareBasis: "SHV3PXOW"
                  }
                }
              ]
            }
          ],
          price: { total: "949.40", totalTaxes: "232.40" },
          pricePerAdult: { total: "949.40", totalTaxes: "232.40" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--102369544",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "4",
                      at: "2019-08-01T19:35:00-04:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "1",
                      at: "2019-08-02T09:15:00+02:00"
                    },
                    carrierCode: "KL",
                    number: "6126",
                    aircraft: { code: "764" },
                    operating: { carrierCode: "DL", number: "6126" },
                    duration: "0DT7H40M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "B",
                    availability: 4,
                    fareBasis: "BFFWUS"
                  }
                }
              ]
            }
          ],
          price: { total: "2263.70", totalTaxes: "216.70" },
          pricePerAdult: { total: "2263.70", totalTaxes: "216.70" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763-443751032",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "EWR",
                      terminal: "B",
                      at: "2019-08-01T17:45:00-04:00"
                    },
                    arrival: {
                      iataCode: "LIS",
                      terminal: "1",
                      at: "2019-08-02T05:35:00+01:00"
                    },
                    carrierCode: "TP",
                    number: "202",
                    aircraft: { code: "332" },
                    operating: { carrierCode: "TP", number: "202" },
                    duration: "0DT6H50M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "E",
                    availability: 9,
                    fareBasis: "EUSDSI0E"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "LIS",
                      terminal: "1",
                      at: "2019-08-02T09:10:00+01:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "2",
                      at: "2019-08-02T11:25:00+02:00"
                    },
                    carrierCode: "TP",
                    number: "1016",
                    aircraft: { code: "319" },
                    operating: { carrierCode: "TP", number: "1016" },
                    duration: "0DT1H15M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "E",
                    availability: 9,
                    fareBasis: "EUSDSI0E"
                  }
                }
              ]
            }
          ],
          price: { total: "260.29", totalTaxes: "123.29" },
          pricePerAdult: { total: "260.29", totalTaxes: "123.29" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--1319311543",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "5",
                      at: "2019-08-01T23:25:00-04:00"
                    },
                    arrival: {
                      iataCode: "LIS",
                      terminal: "1",
                      at: "2019-08-02T11:15:00+01:00"
                    },
                    carrierCode: "TP",
                    number: "208",
                    aircraft: { code: "332" },
                    operating: { carrierCode: "TP", number: "208" },
                    duration: "0DT6H50M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "O",
                    availability: 9,
                    fareBasis: "OUSDSI0E"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "LIS",
                      terminal: "1",
                      at: "2019-08-02T16:15:00+01:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "2",
                      at: "2019-08-02T18:30:00+02:00"
                    },
                    carrierCode: "TP",
                    number: "1024",
                    aircraft: { code: "319" },
                    operating: { carrierCode: "TP", number: "1024" },
                    duration: "0DT1H15M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "O",
                    availability: 9,
                    fareBasis: "OUSDSI0E"
                  }
                }
              ]
            }
          ],
          price: { total: "124.29", totalTaxes: "108.29" },
          pricePerAdult: { total: "124.29", totalTaxes: "108.29" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763-254087094",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      at: "2019-08-01T05:00:00-04:00"
                    },
                    arrival: {
                      iataCode: "LHR",
                      at: "2019-08-01T14:00:00+01:00"
                    },
                    carrierCode: "6X",
                    number: "5500",
                    aircraft: { code: "737" },
                    operating: { carrierCode: "6X", number: "5500" },
                    duration: "0DT4H0M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "BUSINESS",
                    fareClass: "J",
                    availability: 2,
                    fareBasis: "J6XQSMIX"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "LHR",
                      at: "2019-08-01T19:40:00+01:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      at: "2019-08-01T23:00:00+02:00"
                    },
                    carrierCode: "6X",
                    number: "9508",
                    aircraft: { code: "343" },
                    operating: { carrierCode: "6X", number: "9508" },
                    duration: "0DT2H20M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "BUSINESS",
                    fareClass: "J",
                    availability: 9,
                    fareBasis: "J6XQSMIX"
                  }
                }
              ]
            }
          ],
          price: { total: "366.14", totalTaxes: "48.14" },
          pricePerAdult: { total: "366.14", totalTaxes: "48.14" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--1783535952",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "8",
                      at: "2019-08-01T18:55:00-04:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "4S",
                      at: "2019-08-02T08:10:00+02:00"
                    },
                    carrierCode: "AA",
                    number: "94",
                    aircraft: { code: "772" },
                    operating: { carrierCode: "AA", number: "94" },
                    duration: "0DT7H15M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "Y",
                    availability: 7,
                    fareBasis: "Y1N0C9M1"
                  }
                }
              ]
            }
          ],
          price: { total: "2902.70", totalTaxes: "203.70" },
          pricePerAdult: { total: "2902.70", totalTaxes: "203.70" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--1126877979",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "4",
                      at: "2019-08-01T17:50:00-04:00"
                    },
                    arrival: {
                      iataCode: "CDG",
                      terminal: "2E",
                      at: "2019-08-02T07:20:00+02:00"
                    },
                    carrierCode: "DL",
                    number: "262",
                    aircraft: { code: "333" },
                    operating: { carrierCode: "DL", number: "262" },
                    duration: "0DT7H30M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "B",
                    availability: 9,
                    fareBasis: "BFFWUS"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "CDG",
                      terminal: "2F",
                      at: "2019-08-02T12:15:00+02:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "2",
                      at: "2019-08-02T14:30:00+02:00"
                    },
                    carrierCode: "DL",
                    number: "8630",
                    aircraft: { code: "321" },
                    operating: { carrierCode: "AF", number: "8630" },
                    duration: "0DT2H15M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "B",
                    availability: 9,
                    fareBasis: "BFFWUS"
                  }
                }
              ]
            }
          ],
          price: { total: "2271.66", totalTaxes: "224.66" },
          pricePerAdult: { total: "2271.66", totalTaxes: "224.66" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--231792773",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      at: "2019-08-01T20:00:00-04:00"
                    },
                    arrival: {
                      iataCode: "LHR",
                      at: "2019-08-02T08:05:00+01:00"
                    },
                    carrierCode: "6X",
                    number: "1201",
                    aircraft: { code: "744" },
                    operating: { carrierCode: "6X", number: "1201" },
                    duration: "0DT7H5M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "BUSINESS",
                    fareClass: "J",
                    availability: 9,
                    fareBasis: "J6XQSMIX"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "LHR",
                      at: "2019-08-02T10:30:00+01:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      at: "2019-08-02T13:00:00+02:00"
                    },
                    carrierCode: "6X",
                    number: "9931",
                    aircraft: { code: "320" },
                    operating: { carrierCode: "6X", number: "9931" },
                    duration: "0DT1H30M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "BUSINESS",
                    fareClass: "J",
                    availability: 9,
                    fareBasis: "J6XQSMIX"
                  }
                }
              ]
            }
          ],
          price: { total: "366.14", totalTaxes: "48.14" },
          pricePerAdult: { total: "366.14", totalTaxes: "48.14" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763-937442493",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "LGA",
                      terminal: "B",
                      at: "2019-08-01T15:50:00-04:00"
                    },
                    arrival: {
                      iataCode: "YYZ",
                      terminal: "1",
                      at: "2019-08-01T17:30:00-04:00"
                    },
                    carrierCode: "AC",
                    number: "717",
                    aircraft: { code: "320" },
                    operating: { carrierCode: "AC", number: "717" },
                    duration: "0DT1H40M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "K",
                    availability: 9,
                    fareBasis: "K21Q0TG"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "YYZ",
                      terminal: "1",
                      at: "2019-08-01T18:45:00-04:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "1",
                      at: "2019-08-02T07:55:00+02:00"
                    },
                    carrierCode: "AC",
                    number: "836",
                    aircraft: { code: "789" },
                    operating: { carrierCode: "AC", number: "836" },
                    duration: "0DT7H10M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "PREMIUM_ECONOMY",
                    fareClass: "O",
                    availability: 9,
                    fareBasis: "OFFEO"
                  }
                }
              ]
            }
          ],
          price: { total: "2240.10", totalTaxes: "232.10" },
          pricePerAdult: { total: "2240.10", totalTaxes: "232.10" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763-875484514",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "5",
                      at: "2019-08-01T23:25:00-04:00"
                    },
                    arrival: {
                      iataCode: "LIS",
                      terminal: "1",
                      at: "2019-08-02T11:15:00+01:00"
                    },
                    carrierCode: "TP",
                    number: "208",
                    aircraft: { code: "332" },
                    operating: { carrierCode: "TP", number: "208" },
                    duration: "0DT6H50M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "O",
                    availability: 9,
                    fareBasis: "OUSDSI0E"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "LIS",
                      terminal: "1",
                      at: "2019-08-02T13:15:00+01:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "2",
                      at: "2019-08-02T15:30:00+02:00"
                    },
                    carrierCode: "TP",
                    number: "1028",
                    aircraft: { code: "319" },
                    operating: { carrierCode: "TP", number: "1028" },
                    duration: "0DT1H15M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "O",
                    availability: 9,
                    fareBasis: "OUSDSI0E"
                  }
                }
              ]
            }
          ],
          price: { total: "124.29", totalTaxes: "108.29" },
          pricePerAdult: { total: "124.29", totalTaxes: "108.29" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--816986800",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "EWR",
                      terminal: "C",
                      at: "2019-08-01T20:15:00-04:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "1",
                      at: "2019-08-02T09:30:00+02:00"
                    },
                    carrierCode: "LH",
                    number: "7970",
                    aircraft: { code: "777" },
                    operating: { carrierCode: "UA", number: "7970" },
                    duration: "0DT7H15M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "B",
                    availability: 6,
                    fareBasis: "B2E"
                  }
                }
              ]
            }
          ],
          price: { total: "2588.20", totalTaxes: "221.20" },
          pricePerAdult: { total: "2588.20", totalTaxes: "221.20" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--610705762",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "4",
                      at: "2019-08-01T20:15:00-04:00"
                    },
                    arrival: {
                      iataCode: "CDG",
                      terminal: "2E",
                      at: "2019-08-02T09:45:00+02:00"
                    },
                    carrierCode: "DL",
                    number: "264",
                    aircraft: { code: "333" },
                    operating: { carrierCode: "DL", number: "264" },
                    duration: "0DT7H30M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "B",
                    availability: 9,
                    fareBasis: "BFFWUS"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "CDG",
                      terminal: "2F",
                      at: "2019-08-02T14:50:00+02:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "2",
                      at: "2019-08-02T16:55:00+02:00"
                    },
                    carrierCode: "DL",
                    number: "8334",
                    aircraft: { code: "319" },
                    operating: { carrierCode: "AF", number: "8334" },
                    duration: "0DT2H5M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "B",
                    availability: 9,
                    fareBasis: "BFFWUS"
                  }
                }
              ]
            }
          ],
          price: { total: "2271.66", totalTaxes: "224.66" },
          pricePerAdult: { total: "2271.66", totalTaxes: "224.66" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763-1347498940",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "EWR",
                      terminal: "B",
                      at: "2019-08-01T17:45:00-04:00"
                    },
                    arrival: {
                      iataCode: "LIS",
                      terminal: "1",
                      at: "2019-08-02T05:35:00+01:00"
                    },
                    carrierCode: "TP",
                    number: "202",
                    aircraft: { code: "332" },
                    operating: { carrierCode: "TP", number: "202" },
                    duration: "0DT6H50M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "E",
                    availability: 9,
                    fareBasis: "EUSDSI0E"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "LIS",
                      terminal: "1",
                      at: "2019-08-02T13:15:00+01:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "2",
                      at: "2019-08-02T15:30:00+02:00"
                    },
                    carrierCode: "TP",
                    number: "1028",
                    aircraft: { code: "319" },
                    operating: { carrierCode: "TP", number: "1028" },
                    duration: "0DT1H15M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "E",
                    availability: 9,
                    fareBasis: "EUSDSI0E"
                  }
                }
              ]
            }
          ],
          price: { total: "260.29", totalTaxes: "123.29" },
          pricePerAdult: { total: "260.29", totalTaxes: "123.29" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763-1867312335",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "4",
                      at: "2019-08-01T17:50:00-04:00"
                    },
                    arrival: {
                      iataCode: "CDG",
                      terminal: "2E",
                      at: "2019-08-02T07:20:00+02:00"
                    },
                    carrierCode: "DL",
                    number: "262",
                    aircraft: { code: "333" },
                    operating: { carrierCode: "DL", number: "262" },
                    duration: "0DT7H30M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "B",
                    availability: 9,
                    fareBasis: "BFFWUS"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "ORY",
                      terminal: "W",
                      at: "2019-08-02T10:25:00+02:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "2",
                      at: "2019-08-02T12:25:00+02:00"
                    },
                    carrierCode: "DL",
                    number: "6781",
                    aircraft: { code: "73H" },
                    operating: { carrierCode: "UX", number: "6781" },
                    duration: "0DT2H0M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "U",
                    availability: 9,
                    fareBasis: "BFFWUS"
                  }
                }
              ]
            }
          ],
          price: { total: "2266.79", totalTaxes: "219.79" },
          pricePerAdult: { total: "2266.79", totalTaxes: "219.79" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--2019811353",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "EWR",
                      at: "2019-08-01T21:50:00-04:00"
                    },
                    arrival: {
                      iataCode: "LHR",
                      at: "2019-08-02T08:45:00+01:00"
                    },
                    carrierCode: "6X",
                    number: "188",
                    aircraft: { code: "777" },
                    operating: { carrierCode: "6X", number: "188" },
                    duration: "0DT5H55M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "BUSINESS",
                    fareClass: "J",
                    availability: 9,
                    fareBasis: "J6XQSMIX"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "LHR",
                      at: "2019-08-02T10:30:00+01:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      at: "2019-08-02T13:00:00+02:00"
                    },
                    carrierCode: "6X",
                    number: "9931",
                    aircraft: { code: "320" },
                    operating: { carrierCode: "6X", number: "9931" },
                    duration: "0DT1H30M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "BUSINESS",
                    fareClass: "J",
                    availability: 9,
                    fareBasis: "J6XQSMIX"
                  }
                }
              ]
            }
          ],
          price: { total: "366.14", totalTaxes: "48.14" },
          pricePerAdult: { total: "366.14", totalTaxes: "48.14" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763-1455744055",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "LGA",
                      terminal: "B",
                      at: "2019-08-01T12:15:00-04:00"
                    },
                    arrival: {
                      iataCode: "YYZ",
                      terminal: "1",
                      at: "2019-08-01T13:55:00-04:00"
                    },
                    carrierCode: "AC",
                    number: "711",
                    aircraft: { code: "320" },
                    operating: { carrierCode: "AC", number: "711" },
                    duration: "0DT1H40M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "K",
                    availability: 9,
                    fareBasis: "K21Q0TG"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "YYZ",
                      terminal: "1",
                      at: "2019-08-01T18:45:00-04:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "1",
                      at: "2019-08-02T07:55:00+02:00"
                    },
                    carrierCode: "AC",
                    number: "836",
                    aircraft: { code: "789" },
                    operating: { carrierCode: "AC", number: "836" },
                    duration: "0DT7H10M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "PREMIUM_ECONOMY",
                    fareClass: "O",
                    availability: 9,
                    fareBasis: "OFFEO"
                  }
                }
              ]
            }
          ],
          price: { total: "2240.10", totalTaxes: "232.10" },
          pricePerAdult: { total: "2240.10", totalTaxes: "232.10" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--1708049589",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "7",
                      at: "2019-08-01T17:15:00-04:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "4S",
                      at: "2019-08-02T06:15:00+02:00"
                    },
                    carrierCode: "BA",
                    number: "4270",
                    aircraft: { code: "346" },
                    operating: { carrierCode: "IB", number: "4270" },
                    duration: "0DT7H0M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "Y",
                    availability: 9,
                    fareBasis: "Y1N0C9M1"
                  }
                }
              ]
            }
          ],
          price: { total: "2914.70", totalTaxes: "203.70" },
          pricePerAdult: { total: "2914.70", totalTaxes: "203.70" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763-820657269",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "1",
                      at: "2019-08-01T21:20:00-04:00"
                    },
                    arrival: {
                      iataCode: "CMN",
                      terminal: "2",
                      at: "2019-08-02T09:10:00+01:00"
                    },
                    carrierCode: "AT",
                    number: "201",
                    aircraft: { code: "789" },
                    operating: { carrierCode: "AT", number: "201" },
                    duration: "0DT6H50M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "Q",
                    availability: 9,
                    fareBasis: "QA0W0USA"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "CMN",
                      terminal: "2",
                      at: "2019-08-02T15:45:00+01:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "4S",
                      at: "2019-08-02T18:35:00+02:00"
                    },
                    carrierCode: "AT",
                    number: "970",
                    aircraft: { code: "738" },
                    operating: { carrierCode: "AT", number: "970" },
                    duration: "0DT1H50M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "Q",
                    availability: 9,
                    fareBasis: "QA0W0USA"
                  }
                }
              ]
            }
          ],
          price: { total: "829.81", totalTaxes: "235.81" },
          pricePerAdult: { total: "829.81", totalTaxes: "235.81" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763-954254055",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "5",
                      at: "2019-08-01T17:20:00-04:00"
                    },
                    arrival: {
                      iataCode: "DUB",
                      terminal: "2",
                      at: "2019-08-02T04:50:00+01:00"
                    },
                    carrierCode: "EI",
                    number: "104",
                    aircraft: { code: "330" },
                    operating: { carrierCode: "EI", number: "104" },
                    duration: "0DT6H30M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "M",
                    availability: 9,
                    fareBasis: "MH1NS"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "DUB",
                      terminal: "2",
                      at: "2019-08-02T06:15:00+01:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "1",
                      at: "2019-08-02T09:50:00+02:00"
                    },
                    carrierCode: "EI",
                    number: "592",
                    aircraft: { code: "320" },
                    operating: { carrierCode: "EI", number: "592" },
                    duration: "0DT2H35M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "W",
                    availability: 9,
                    fareBasis: "WOW26GDS"
                  }
                }
              ]
            }
          ],
          price: { total: "885.82", totalTaxes: "69.82" },
          pricePerAdult: { total: "885.82", totalTaxes: "69.82" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763-452521619",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "1",
                      at: "2019-08-01T18:45:00-04:00"
                    },
                    arrival: {
                      iataCode: "CDG",
                      terminal: "2E",
                      at: "2019-08-02T08:10:00+02:00"
                    },
                    carrierCode: "DL",
                    number: "1015",
                    aircraft: { code: "388" },
                    operating: { carrierCode: "AF", number: "1015" },
                    duration: "0DT7H25M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "B",
                    availability: 9,
                    fareBasis: "BFFWUS"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "CDG",
                      terminal: "2F",
                      at: "2019-08-02T12:15:00+02:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "2",
                      at: "2019-08-02T14:30:00+02:00"
                    },
                    carrierCode: "DL",
                    number: "8630",
                    aircraft: { code: "321" },
                    operating: { carrierCode: "AF", number: "8630" },
                    duration: "0DT2H15M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "B",
                    availability: 9,
                    fareBasis: "BFFWUS"
                  }
                }
              ]
            }
          ],
          price: { total: "2271.66", totalTaxes: "224.66" },
          pricePerAdult: { total: "2271.66", totalTaxes: "224.66" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--606558740",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "7",
                      at: "2019-08-01T20:00:00-04:00"
                    },
                    arrival: {
                      iataCode: "LHR",
                      terminal: "4",
                      at: "2019-08-02T08:05:00+01:00"
                    },
                    carrierCode: "6X",
                    number: "176",
                    aircraft: { code: "744" },
                    operating: { carrierCode: "6X", number: "176" },
                    duration: "0DT7H5M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "BUSINESS",
                    fareClass: "J",
                    availability: 9,
                    fareBasis: "J6XQSMIX"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "LHR",
                      at: "2019-08-02T10:30:00+01:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      at: "2019-08-02T13:00:00+02:00"
                    },
                    carrierCode: "6X",
                    number: "9931",
                    aircraft: { code: "320" },
                    operating: { carrierCode: "6X", number: "9931" },
                    duration: "0DT1H30M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "BUSINESS",
                    fareClass: "J",
                    availability: 9,
                    fareBasis: "J6XQSMIX"
                  }
                }
              ]
            }
          ],
          price: { total: "366.14", totalTaxes: "48.14" },
          pricePerAdult: { total: "366.14", totalTaxes: "48.14" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763-614225555",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "4",
                      at: "2019-08-01T22:05:00-04:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "1",
                      at: "2019-08-02T11:30:00+02:00"
                    },
                    carrierCode: "UX",
                    number: "92",
                    aircraft: { code: "332" },
                    operating: { carrierCode: "UX", number: "92" },
                    duration: "0DT7H25M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "M",
                    availability: 9,
                    fareBasis: "MYYOAE"
                  }
                }
              ]
            }
          ],
          price: { total: "1947.70", totalTaxes: "203.70" },
          pricePerAdult: { total: "1947.70", totalTaxes: "203.70" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763-569522731",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "4",
                      at: "2019-08-01T20:15:00-04:00"
                    },
                    arrival: {
                      iataCode: "CDG",
                      terminal: "2E",
                      at: "2019-08-02T09:45:00+02:00"
                    },
                    carrierCode: "DL",
                    number: "264",
                    aircraft: { code: "333" },
                    operating: { carrierCode: "DL", number: "264" },
                    duration: "0DT7H30M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "B",
                    availability: 9,
                    fareBasis: "BFFWUS"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "CDG",
                      terminal: "2F",
                      at: "2019-08-02T12:15:00+02:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "2",
                      at: "2019-08-02T14:30:00+02:00"
                    },
                    carrierCode: "DL",
                    number: "8630",
                    aircraft: { code: "321" },
                    operating: { carrierCode: "AF", number: "8630" },
                    duration: "0DT2H15M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "B",
                    availability: 9,
                    fareBasis: "BFFWUS"
                  }
                }
              ]
            }
          ],
          price: { total: "2271.66", totalTaxes: "224.66" },
          pricePerAdult: { total: "2271.66", totalTaxes: "224.66" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763-1546356137",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "EWR",
                      terminal: "C",
                      at: "2019-08-01T20:05:00-04:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "1",
                      at: "2019-08-02T09:20:00+02:00"
                    },
                    carrierCode: "UA",
                    number: "51",
                    aircraft: { code: "777" },
                    operating: { carrierCode: "UA", number: "51" },
                    duration: "0DT7H15M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "B",
                    availability: 9,
                    fareBasis: "B2E"
                  }
                }
              ]
            }
          ],
          price: { total: "2570.70", totalTaxes: "203.70" },
          pricePerAdult: { total: "2570.70", totalTaxes: "203.70" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763-1523775378",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "4",
                      at: "2019-08-01T19:35:00-04:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "1",
                      at: "2019-08-02T09:15:00+02:00"
                    },
                    carrierCode: "AF",
                    number: "3679",
                    aircraft: { code: "764" },
                    operating: { carrierCode: "DL", number: "3679" },
                    duration: "0DT7H40M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "B",
                    availability: 9,
                    fareBasis: "BFFWUS"
                  }
                }
              ]
            }
          ],
          price: { total: "2263.70", totalTaxes: "216.70" },
          pricePerAdult: { total: "2263.70", totalTaxes: "216.70" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--2079564477",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "5",
                      at: "2019-08-01T23:25:00-04:00"
                    },
                    arrival: {
                      iataCode: "LIS",
                      terminal: "1",
                      at: "2019-08-02T11:15:00+01:00"
                    },
                    carrierCode: "TP",
                    number: "208",
                    aircraft: { code: "332" },
                    operating: { carrierCode: "TP", number: "208" },
                    duration: "0DT6H50M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "O",
                    availability: 9,
                    fareBasis: "OUSDSI0E"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "LIS",
                      terminal: "1",
                      at: "2019-08-02T21:35:00+01:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "2",
                      at: "2019-08-02T23:50:00+02:00"
                    },
                    carrierCode: "TP",
                    number: "1022",
                    aircraft: { code: "319" },
                    operating: { carrierCode: "TP", number: "1022" },
                    duration: "0DT1H15M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "O",
                    availability: 9,
                    fareBasis: "OUSDSI0E"
                  }
                }
              ]
            }
          ],
          price: { total: "124.29", totalTaxes: "108.29" },
          pricePerAdult: { total: "124.29", totalTaxes: "108.29" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763-1759922171",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "7",
                      at: "2019-08-01T00:30:00-04:00"
                    },
                    arrival: {
                      iataCode: "KBP",
                      at: "2019-08-01T16:20:00+03:00"
                    },
                    carrierCode: "PS",
                    number: "232",
                    aircraft: { code: "777" },
                    operating: { carrierCode: "PS", number: "232" },
                    duration: "0DT8H50M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "S",
                    availability: 9,
                    fareBasis: "SH1FAP5"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "KBP",
                      at: "2019-08-01T20:40:00+03:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "4S",
                      at: "2019-08-02T00:10:00+02:00"
                    },
                    carrierCode: "PS",
                    number: "945",
                    aircraft: { code: "738" },
                    operating: { carrierCode: "PS", number: "945" },
                    duration: "0DT4H30M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "S",
                    availability: 9,
                    fareBasis: "SH1FAP5"
                  }
                }
              ]
            }
          ],
          price: { total: "980.20", totalTaxes: "220.20" },
          pricePerAdult: { total: "980.20", totalTaxes: "220.20" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763-974606255",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "EWR",
                      terminal: "C",
                      at: "2019-08-01T20:15:00-04:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "1",
                      at: "2019-08-02T09:30:00+02:00"
                    },
                    carrierCode: "SN",
                    number: "9027",
                    aircraft: { code: "777" },
                    operating: { carrierCode: "UA", number: "9027" },
                    duration: "0DT7H15M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "B",
                    availability: 4,
                    fareBasis: "B2E"
                  }
                }
              ]
            }
          ],
          price: { total: "2588.20", totalTaxes: "221.20" },
          pricePerAdult: { total: "2588.20", totalTaxes: "221.20" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763-1710796863",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "7",
                      at: "2019-08-01T17:15:00-04:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "4S",
                      at: "2019-08-02T06:15:00+02:00"
                    },
                    carrierCode: "IB",
                    number: "6250",
                    aircraft: { code: "346" },
                    operating: { carrierCode: "IB", number: "6250" },
                    duration: "0DT7H0M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "Y",
                    availability: 9,
                    fareBasis: "Y1N0C9M1"
                  }
                }
              ]
            }
          ],
          price: { total: "2914.70", totalTaxes: "203.70" },
          pricePerAdult: { total: "2914.70", totalTaxes: "203.70" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--1264198180",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "4",
                      at: "2019-08-01T17:50:00-04:00"
                    },
                    arrival: {
                      iataCode: "CDG",
                      terminal: "2E",
                      at: "2019-08-02T07:20:00+02:00"
                    },
                    carrierCode: "DL",
                    number: "262",
                    aircraft: { code: "333" },
                    operating: { carrierCode: "DL", number: "262" },
                    duration: "0DT7H30M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "B",
                    availability: 9,
                    fareBasis: "BFFWUS"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "CDG",
                      terminal: "2F",
                      at: "2019-08-02T09:05:00+02:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "2",
                      at: "2019-08-02T11:10:00+02:00"
                    },
                    carrierCode: "DL",
                    number: "8374",
                    aircraft: { code: "321" },
                    operating: { carrierCode: "AF", number: "8374" },
                    duration: "0DT2H5M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "B",
                    availability: 9,
                    fareBasis: "BFFWUS"
                  }
                }
              ]
            }
          ],
          price: { total: "2271.66", totalTaxes: "224.66" },
          pricePerAdult: { total: "2271.66", totalTaxes: "224.66" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--280507170",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "8",
                      at: "2019-08-01T18:55:00-04:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "4S",
                      at: "2019-08-02T08:10:00+02:00"
                    },
                    carrierCode: "AY",
                    number: "4008",
                    aircraft: { code: "772" },
                    operating: { carrierCode: "AA", number: "4008" },
                    duration: "0DT7H15M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "Y",
                    availability: 9,
                    fareBasis: "Y1N0C9M1"
                  }
                }
              ]
            }
          ],
          price: { total: "2902.70", totalTaxes: "203.70" },
          pricePerAdult: { total: "2902.70", totalTaxes: "203.70" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--169916866",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      at: "2019-08-01T20:00:00-04:00"
                    },
                    arrival: {
                      iataCode: "LHR",
                      at: "2019-08-02T08:05:00+01:00"
                    },
                    carrierCode: "6X",
                    number: "1226",
                    aircraft: { code: "744" },
                    operating: { carrierCode: "6X", number: "1226" },
                    duration: "0DT7H5M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "BUSINESS",
                    fareClass: "J",
                    availability: 9,
                    fareBasis: "J6XQSMIX"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "LHR",
                      at: "2019-08-02T10:30:00+01:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      at: "2019-08-02T13:00:00+02:00"
                    },
                    carrierCode: "6X",
                    number: "9931",
                    aircraft: { code: "320" },
                    operating: { carrierCode: "6X", number: "9931" },
                    duration: "0DT1H30M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "BUSINESS",
                    fareClass: "J",
                    availability: 9,
                    fareBasis: "J6XQSMIX"
                  }
                }
              ]
            }
          ],
          price: { total: "366.14", totalTaxes: "48.14" },
          pricePerAdult: { total: "366.14", totalTaxes: "48.14" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--1130208453",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "7",
                      at: "2019-08-01T17:15:00-04:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "4S",
                      at: "2019-08-02T06:15:00+02:00"
                    },
                    carrierCode: "AY",
                    number: "5654",
                    aircraft: { code: "346" },
                    operating: { carrierCode: "IB", number: "5654" },
                    duration: "0DT7H0M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "Y",
                    availability: 9,
                    fareBasis: "Y1N0C9M1"
                  }
                }
              ]
            }
          ],
          price: { total: "2902.70", totalTaxes: "203.70" },
          pricePerAdult: { total: "2902.70", totalTaxes: "203.70" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--1798025904",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "EWR",
                      terminal: "A",
                      at: "2019-08-01T14:25:00-04:00"
                    },
                    arrival: {
                      iataCode: "YYZ",
                      terminal: "1",
                      at: "2019-08-01T16:02:00-04:00"
                    },
                    carrierCode: "AC",
                    number: "7657",
                    aircraft: { code: "E75" },
                    operating: { carrierCode: "AC", number: "7657" },
                    duration: "0DT1H37M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "A",
                    availability: 9,
                    fareBasis: "A21Q1TG"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "YYZ",
                      terminal: "1",
                      at: "2019-08-01T18:45:00-04:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "1",
                      at: "2019-08-02T07:55:00+02:00"
                    },
                    carrierCode: "AC",
                    number: "836",
                    aircraft: { code: "789" },
                    operating: { carrierCode: "AC", number: "836" },
                    duration: "0DT7H10M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "PREMIUM_ECONOMY",
                    fareClass: "O",
                    availability: 9,
                    fareBasis: "OFFEO"
                  }
                }
              ]
            }
          ],
          price: { total: "2273.10", totalTaxes: "232.10" },
          pricePerAdult: { total: "2273.10", totalTaxes: "232.10" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--416329371",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      at: "2019-08-01T20:00:00-04:00"
                    },
                    arrival: {
                      iataCode: "LHR",
                      at: "2019-08-02T08:05:00+01:00"
                    },
                    carrierCode: "6X",
                    number: "172",
                    aircraft: { code: "744" },
                    operating: { carrierCode: "6X", number: "172" },
                    duration: "0DT7H5M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "BUSINESS",
                    fareClass: "J",
                    availability: 9,
                    fareBasis: "J6XQSMIX"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "LHR",
                      at: "2019-08-02T10:30:00+01:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      at: "2019-08-02T13:00:00+02:00"
                    },
                    carrierCode: "6X",
                    number: "9931",
                    aircraft: { code: "320" },
                    operating: { carrierCode: "6X", number: "9931" },
                    duration: "0DT1H30M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "BUSINESS",
                    fareClass: "J",
                    availability: 9,
                    fareBasis: "J6XQSMIX"
                  }
                }
              ]
            }
          ],
          price: { total: "366.14", totalTaxes: "48.14" },
          pricePerAdult: { total: "366.14", totalTaxes: "48.14" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--637103463",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      terminal: "4",
                      at: "2019-08-01T22:05:00-04:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "1",
                      at: "2019-08-02T11:30:00+02:00"
                    },
                    carrierCode: "DL",
                    number: "6744",
                    aircraft: { code: "332" },
                    operating: { carrierCode: "UX", number: "6744" },
                    duration: "0DT7H25M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "B",
                    availability: 9,
                    fareBasis: "BFFWUS"
                  }
                }
              ]
            }
          ],
          price: { total: "2250.70", totalTaxes: "203.70" },
          pricePerAdult: { total: "2250.70", totalTaxes: "203.70" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--308374463",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "EWR",
                      terminal: "B",
                      at: "2019-08-01T17:45:00-04:00"
                    },
                    arrival: {
                      iataCode: "LIS",
                      terminal: "1",
                      at: "2019-08-02T05:35:00+01:00"
                    },
                    carrierCode: "TP",
                    number: "202",
                    aircraft: { code: "332" },
                    operating: { carrierCode: "TP", number: "202" },
                    duration: "0DT6H50M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "E",
                    availability: 9,
                    fareBasis: "EUSDSI0E"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "LIS",
                      terminal: "1",
                      at: "2019-08-02T06:55:00+01:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "2",
                      at: "2019-08-02T09:10:00+02:00"
                    },
                    carrierCode: "TP",
                    number: "1026",
                    aircraft: { code: "319" },
                    operating: { carrierCode: "TP", number: "1026" },
                    duration: "0DT1H15M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "E",
                    availability: 9,
                    fareBasis: "EUSDSI0E"
                  }
                }
              ]
            }
          ],
          price: { total: "260.29", totalTaxes: "123.29" },
          pricePerAdult: { total: "260.29", totalTaxes: "123.29" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--2006711749",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "EWR",
                      terminal: "B",
                      at: "2019-08-01T17:25:00-04:00"
                    },
                    arrival: {
                      iataCode: "DUB",
                      terminal: "2",
                      at: "2019-08-02T04:50:00+01:00"
                    },
                    carrierCode: "EI",
                    number: "100",
                    aircraft: { code: "330" },
                    operating: { carrierCode: "EI", number: "100" },
                    duration: "0DT6H25M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "M",
                    availability: 9,
                    fareBasis: "MH1NS"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "DUB",
                      terminal: "2",
                      at: "2019-08-02T06:15:00+01:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      terminal: "1",
                      at: "2019-08-02T09:50:00+02:00"
                    },
                    carrierCode: "EI",
                    number: "592",
                    aircraft: { code: "320" },
                    operating: { carrierCode: "EI", number: "592" },
                    duration: "0DT2H35M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "ECONOMY",
                    fareClass: "W",
                    availability: 9,
                    fareBasis: "WOW26GDS"
                  }
                }
              ]
            }
          ],
          price: { total: "885.82", totalTaxes: "69.82" },
          pricePerAdult: { total: "885.82", totalTaxes: "69.82" }
        }
      ]
    },
    {
      type: "flight-offer",
      id: "1548417551763--1298886572",
      offerItems: [
        {
          services: [
            {
              segments: [
                {
                  flightSegment: {
                    departure: {
                      iataCode: "JFK",
                      at: "2019-08-01T20:00:00-04:00"
                    },
                    arrival: {
                      iataCode: "LHR",
                      at: "2019-08-02T08:05:00+01:00"
                    },
                    carrierCode: "6X",
                    number: "528",
                    aircraft: { code: "747" },
                    operating: { carrierCode: "6X", number: "528" },
                    duration: "0DT7H5M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "BUSINESS",
                    fareClass: "J",
                    availability: 9,
                    fareBasis: "J6XQSMIX"
                  }
                },
                {
                  flightSegment: {
                    departure: {
                      iataCode: "LHR",
                      at: "2019-08-02T10:30:00+01:00"
                    },
                    arrival: {
                      iataCode: "MAD",
                      at: "2019-08-02T13:00:00+02:00"
                    },
                    carrierCode: "6X",
                    number: "9931",
                    aircraft: { code: "320" },
                    operating: { carrierCode: "6X", number: "9931" },
                    duration: "0DT1H30M"
                  },
                  pricingDetailPerAdult: {
                    travelClass: "BUSINESS",
                    fareClass: "J",
                    availability: 9,
                    fareBasis: "J6XQSMIX"
                  }
                }
              ]
            }
          ],
          price: { total: "366.14", totalTaxes: "48.14" },
          pricePerAdult: { total: "366.14", totalTaxes: "48.14" }
        }
      ]
    }
  ],
  parsed: true
}
