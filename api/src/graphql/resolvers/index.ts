import { Resolvers } from '../'
import { User } from '../../entity'

import { createChannel, channels } from './Channel'

export const resolvers: Resolvers = {
  Query: {
    channels,
    user: async (_parent, args) => User.findOne(args)
  },
  Mutation: {
    createChannel,
    createUser: async (_parent, { input }) => {
      const user = new User()
      user.name = input.name
      return user.save()
    }
  }
}
