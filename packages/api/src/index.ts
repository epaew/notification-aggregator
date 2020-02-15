import 'reflect-metadata'
import { ApolloServer, gql } from 'apollo-server-express'
import { BaseEntity, createConnection } from 'typeorm'
import express from 'express'
import resolvers from './resolvers'

createConnection().then(async connection => {
  BaseEntity.useConnection(connection)

  const typeDefs = gql`
    scalar Date

    type Query {
      users: [User!]!
    }

    type User {
      id: ID!
      name: String!
      createdAt: Date!
      updatedAt: Date!
    }

    type Mutation {
      createUser(input: createUserInput): User
    }

    input createUserInput {
      name: String!
    }
  `
  const apolloServer = new ApolloServer({ typeDefs, resolvers })

  // create express app
  const app = express()
  apolloServer.applyMiddleware({ app })

  // start express server
  app.listen(3000, () => {
    console.log('Express server has started on port 3000.')
  })
}).catch(error => console.log(error))
