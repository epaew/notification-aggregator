import { User } from '../entity'

export default {
  Query: {
    users: async () => User.find()
  },
  Mutation: {
    createUser: async (_parent: any, args: any) => {
      const user = Object.assign(new User(), args.input)
      return user.save()
    }
  }
}
