export const userResolver = {
  Query: {
    me: (p, a, { me }) => {
      return me
    },
    user: (parent, { id }, { models }) => {
      return models.fakeUsers[id]
    },
    users: (_, __, { models: { fakeUsers } }) => {
      return Object.values(fakeUsers)
    }
  },
  Mutation: {},
  User: {
    username: user => user.username,
    messages: (user, __, { models: { fakeMessages } }) => {
      return Object.values(fakeMessages).filter(mess => mess.userId === user.id)
    }
  }
}

export default userResolver
