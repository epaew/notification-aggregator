import { Channel, User } from '../../entity'

export const createChannel = async (_: any, args: { input: any }) => {
  const channel = Object.assign(new Channel(), args.input)
  channel.createdBy = await User.findOne() // TODO
  return channel.save()
}

export const channels = async () => Channel.find()
