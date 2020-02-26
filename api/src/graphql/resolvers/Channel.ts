import { Channel, User } from '../../entity'
import { QueryResolvers, MutationResolvers } from '../'

export const createChannel: MutationResolvers['createChannel'] = async (_parent, args, { user }) => {
  const channel = Object.assign(new Channel(), args.input)
  channel.createdBy = await User.findOneOrFail({ id: user.uid })
  return channel.save()
}

export const channels: QueryResolvers['channels'] = async () => Channel.find()
