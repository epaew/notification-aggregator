import { gql } from 'apollo-server-express'
import fs from 'fs'
import path from 'path'

export * from './generated'
export * from './resolvers'

export const typeDefs = gql`
  ${fs.readFileSync(path.join(__dirname, 'schema.graphql'), 'utf8')}
`
