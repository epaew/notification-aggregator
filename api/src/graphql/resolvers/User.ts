import { QueryResolvers } from '../'
import { User } from '../../entity'

export const currentUser: QueryResolvers['currentUser'] = async (_parent, _args, { user }) => User.findOne({ id: user.uid })
export const user: QueryResolvers['user'] = async (_parent, args) => User.findOne(args)
