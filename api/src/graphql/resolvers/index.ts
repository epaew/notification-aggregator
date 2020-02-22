import { Resolvers } from '../'

import { createChannel, channels } from './Channel'
import { createUser, user } from './User'

export const resolvers: Resolvers = {
  Query: {
    channels,
    user
  },
  Mutation: {
    createChannel,
    createUser
  }
}
