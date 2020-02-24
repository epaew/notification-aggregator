import { Resolvers } from '../'

import { createChannel, channels } from './Channel'
import { createUser, currentUser, user } from './User'

export const resolvers: Resolvers = {
  Query: {
    channels,
    currentUser,
    user
  },
  Mutation: {
    createChannel,
    createUser
  }
}
