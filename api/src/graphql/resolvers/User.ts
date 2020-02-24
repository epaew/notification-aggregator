import { User } from '../../entity'

export const createUser = async (_: any, args: { input: any }) => {
  const user = Object.assign(new User(), args.input)
  return user.save()
}

export const currentUser = async (_parent: any, _args: any, { user }: { user: any }) => {
  const firstUser = await User.findOne()
  if (!firstUser) { return firstUser }

  return {
    ...firstUser,
    name: JSON.stringify(user)
  }
}
export const user = async (_: any, args: { id: number }) => User.findOne(args)
