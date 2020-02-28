import { gql } from 'apollo-server-express'
import fs from 'fs'
import path from 'path'
import * as generated from './generated'

export * from './resolvers'

export const typeDefs = gql`
  ${fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8')}
`

type ContextType = { user: { uid: string } }
export type Resolvers = generated.Resolvers<ContextType>
export type QueryResolvers = generated.QueryResolvers<ContextType>
export type MutationResolvers = generated.MutationResolvers<ContextType>
