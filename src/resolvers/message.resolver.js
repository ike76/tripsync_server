import { v4 as uuid } from "uuid"

const messageResolver = {
  Query: {
    message: (parent, { id }, { models: { fakeMessages } }) => {
      return fakeMessages[id]
    },
    messages: (parent, args, { models: { fakeMessages } }) => {
      return Object.values(fakeMessages)
    }
  },
  Mutation: {
    createMessage: (_, { text }, { me, models: { fakeMessages } }) => {
      const id = uuid()
      const newMessage = { text, userId: me.id, id }
      fakeMessages[id] = newMessage
      return newMessage
    },
    deleteMessage: (_, { id }, { me, models }) => {
      const { [id]: message, ...otherMessages } = models.fakeMessages
      if (!message) return false
      models.fakeMessages = otherMessages
      return true
    },
    updateMessage: (_, { id, text }, { models: { fakeMessages } }) => {
      const oldMessage = fakeMessages[id]
      if (!oldMessage) throw new Error("invalid message")
      const newMessage = { ...oldMessage, text }
      fakeMessages[id] = newMessage
      return newMessage
    }
  },
  Message: {
    user: (message, __, { models: { fakeUsers } }) => fakeUsers[message.userId]
  }
}

export default messageResolver
