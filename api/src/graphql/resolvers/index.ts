import { User } from '../../entity'

export const resolvers = {
  Query: {
    user: async (id: number) => User.findOne(id)
  },
  Mutation: {
    createUser: async (_parent: any, args: any) => {
      const user = Object.assign(new User(), args.input)
      return user.save()
    }
  }
}
