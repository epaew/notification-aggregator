import 'reflect-metadata'
import { ApolloServer, gql } from 'apollo-server-express'
import { createConnection } from 'typeorm'
import express from 'express'

createConnection().then(async () => {
  const typeDefs = gql`
    type Query {
      hello: String
    }
  `
  const resolvers = {
    Query: { hello: () => 'Hello world!' }
  }
  const apolloServer = new ApolloServer({ typeDefs, resolvers })

  // create express app
  const app = express()
  apolloServer.applyMiddleware({ app })

  // start express server
  app.listen(3000, () => {
    console.log('Express server has started on port 3000.')
  })
}).catch(error => console.log(error))
