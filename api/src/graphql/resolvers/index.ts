import { Resolvers } from '../'
import { User } from '../../entity'

export const resolvers: Resolvers = {
  Query: {
    user: async (_parent, args) => User.findOne(args)
  },
  Mutation: {
    createUser: async (_parent, args) => {
      const user = Object.assign(new User(), args.input)
      return user.save()
    }
  }
}
