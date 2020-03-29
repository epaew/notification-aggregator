import { ApolloClient } from 'apollo-client'
import Constants from 'expo-constants'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { setContext } from 'apollo-link-context'

import { auth } from '../lib/firebase'

const authLink = setContext(async (_, { headers }) => {
  const token = await auth.currentUser?.getIdToken()

  return {
    headers: {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    },
  }
})

const httpLink = createHttpLink({
  uri: Constants.manifest.extra.apiUrl,
})

export const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: process.env.NODE_ENV !== 'production',
})
