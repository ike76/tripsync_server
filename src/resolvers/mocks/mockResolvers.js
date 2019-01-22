import faker from "faker"

const fakeUser = () => ({
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  rating: faker.random.number(5),
  email: faker.internet.email(),
  password: faker.internet.password(),
  userHandle: faker.name.lastName(),
  photoUrl: faker.internet.url()
})

const mocks = {
  Int: () => 6,
  Float: () => 43.21,
  String: () => "default string",
  User: fakeUser,
  Song: () => ({ _id: "234345456", title: "autumn leaves" })
}

export default mocks
