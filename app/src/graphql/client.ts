import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
// import { setContext } from 'apollo-link-context'

// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem('token')
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : '',
//     }
//   }
// })

const httpLink = createHttpLink({
  uri: 'http://localhost:8080/graphql' // TODO
})

export const apolloClient = new ApolloClient({
  link: httpLink,
  // link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})
