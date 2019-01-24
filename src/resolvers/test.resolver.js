const testResolver = {
  Query: {
    helloWorld: async (root, args, ctx) => {
      console.log("ctx", ctx)
      return "haaay"
    }
  },
  Mutation: {
    newGuy: async (root, { email, password }, ctx) => {
      // can i connect to model?
      console.log(`called with ${email} ${password}`)
      const newGuy = await ctx.models.User.create({ email, password })
      console.log("newGuy", newGuy)
      return newGuy
    }
  }
}

export default testResolver
