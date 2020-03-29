import 'reflect-metadata'
import { ApolloServer, AuthenticationError } from 'apollo-server-express'
import { BaseEntity, createConnection } from 'typeorm'
import express from 'express'
import { ServerMiddleware } from '@nuxt/types'

import { auth } from './lib/firebaseAdmin'
import { typeDefs, resolvers } from './graphql'

const createEntityConnection = (): void => {
  createConnection()
    .then(connection => BaseEntity.useConnection(connection))
    .catch(error => console.error(error))
}
createEntityConnection()

const createApolloServer = (): ApolloServer => {
  return new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req, res }) => {
      const token = req.headers.authorization
      if (typeof token === 'undefined') {
        throw new AuthenticationError('Invalid token')
      }

      try {
        const user = await auth.verifyIdToken(token.replace('Bearer ', ''))
        return { req, res, user }
      } catch (error) {
        console.error(error)
        throw new AuthenticationError('Invalid token')
      }
    },
  })
}

const createApp = (): ServerMiddleware => {
  const app = express()
  const apolloServer = createApolloServer()
  apolloServer.applyMiddleware({ app })

  return app
}

export default createApp()
