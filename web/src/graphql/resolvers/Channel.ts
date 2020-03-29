import { FindConditions, Like } from 'typeorm'

import { Channel, User } from '../../entity'
import { QueryResolvers, MutationResolvers } from '../'

export const channels: QueryResolvers['channels'] = async (
  _parent,
  { name, offset, limit }
) => {
  const where: FindConditions<Channel> = { public: true }
  if (name) where.name = Like(`%${name}%`)

  return await Channel.find({
    where,
    order: { name: 'ASC' },
    skip: offset,
    take: limit,
  })
}

export const createChannel: MutationResolvers['createChannel'] = async (
  _parent,
  args,
  { user }
) => {
  const channel = Object.assign(new Channel(), args.input)
  channel.createdBy = await User.findOneOrFail({ id: user.uid })
  return await channel.save()
}
