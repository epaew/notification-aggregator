import 'reflect-metadata'
import { ApolloServer, AuthenticationError } from 'apollo-server-express'
import { auth } from './lib/firebaseAdmin'
import { BaseEntity, createConnection } from 'typeorm'
import express from 'express'
import { typeDefs, resolvers } from './graphql'

const startApp = async () => {
  const connection = await createConnection()
  BaseEntity.useConnection(connection)

  const app = express()
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req, res }) => {
      const token = req.headers.authorization
      if (!token) {
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
  const port = process.env.PORT || 3000
  apolloServer.applyMiddleware({ app })

  app.listen(port, () => {
    console.log(`Express server has started on port ${port}.`)
  })
}

startApp()
