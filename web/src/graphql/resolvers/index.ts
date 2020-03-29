import { Resolvers } from '../'

import { createChannel, channels } from './Channel'
import { currentUser, user, users } from './User'

export const resolvers: Resolvers = {
  Query: {
    channels,
    currentUser,
    user,
    users,
  },
  Mutation: {
    createChannel,
  },
}
