import { User } from '../../entity'

export const createUser = async (_: any, args: { input: any }) => {
  const user = Object.assign(new User(), args.input)
  return user.save()
}

export const user = async (_: any, args: { id: number }) => User.findOne(args)
