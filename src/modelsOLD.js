export const fakeUsers = {
  robin_w_id: {
    id: "robin_w_id",
    username: "Robin Wieruch",
    age: 30
  },
  davey_d_id: {
    id: "davey_d_id",
    username: "Dave Davids",
    age: 40
  },
  brian_e_id: {
    id: "brian_e_id",
    username: "Brian EEE",
    age: 492
  }
}
export const fakeMessages = {
  1: {
    id: 1,
    text: "Hello World",
    userId: "davey_d_id"
  },
  2: {
    id: 2,
    text: "Bye Bye World",
    userId: "brian_e_id"
  },
  3: {
    id: 3,
    text: "I'm threeee",
    userId: "brian_e_id"
  },
  4: {
    id: 4,
    text: "yum yum coconuts",
    userId: "robin_w_id"
  }
}

export default { fakeMessages, fakeUsers }
