import { Like } from 'typeorm'

import { QueryResolvers } from '../'
import { User } from '../../entity'

export const currentUser: QueryResolvers['currentUser'] = async (
  _parent,
  _args,
  context
) => {
  const { user: firebaseUser } = context
  let user = await User.findOne({ id: firebaseUser.uid })
  if (user) return user

  user = Object.assign(new User(), {
    id: firebaseUser.uid,
    displayName: firebaseUser.name ?? 'Anonymous User',
    photoURL: firebaseUser.picture
  })
  return await user.save()
}
export const user: QueryResolvers['user'] = async (_parent, args) =>
  await User.findOne(args)
export const users: QueryResolvers['users'] = async (
  _parent,
  { name, offset, limit }
) => {
  return await User.find({
    where: name ? { displayName: Like(`%${name}%`) } : undefined,
    order: { displayName: 'ASC' },
    skip: offset,
    take: limit
  })
}
