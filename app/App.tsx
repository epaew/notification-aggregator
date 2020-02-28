import React from 'react'
import { apolloClient } from './src/graphql'
import { ApolloProvider } from '@apollo/react-hooks'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import { FirebaseProvider } from './src/contexts'
import MainContainer from './src/MainContainer'

export default () => {
  return (
    <SafeAreaProvider>
      <FirebaseProvider>
        <ApolloProvider client={apolloClient}>
          <MainContainer />
        </ApolloProvider>
      </FirebaseProvider>
    </SafeAreaProvider>
  )
}
