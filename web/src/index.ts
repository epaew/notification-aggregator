import 'reflect-metadata'
import { ApolloServer, AuthenticationError } from 'apollo-server'
import { BaseEntity, createConnection } from 'typeorm'

import { auth } from './lib/firebaseAdmin'
import { typeDefs, resolvers } from './graphql'

const startApp = async (): Promise<void> => {
  const connection = await createConnection()
  BaseEntity.useConnection(connection)

  const server = new ApolloServer({
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
      } catch (e) {
        console.error(e)
        throw new AuthenticationError('Invalid token')
      }
    }
  })
  const port = process.env.PORT ?? 3000

  const { url } = await server.listen({ port })
  console.log(`Express server has started on ${url}.`)
}

startApp().catch(() => {})
