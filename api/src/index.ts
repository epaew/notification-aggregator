import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import { BaseEntity, createConnection } from 'typeorm'
import express from 'express'
import { typeDefs, resolvers } from './graphql'

const startApp = async () => {
  const connection = await createConnection()
  BaseEntity.useConnection(connection)

  const app = express()
  const apolloServer = new ApolloServer({ typeDefs, resolvers })
  const port = process.env.PORT || 3000
  apolloServer.applyMiddleware({ app })

  app.listen(port, () => {
    console.log(`Express server has started on port ${port}.`)
  })
}

startApp()
