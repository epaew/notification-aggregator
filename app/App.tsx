import React from 'react'
import { apolloClient } from './src/graphql'
import { ApolloProvider } from '@apollo/react-hooks'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { Theme, ThemeProvider } from 'react-native-elements'

import { FirebaseProvider } from './src/contexts'
import MainContainer from './src/MainContainer'

const theme: Theme = {
  Button: {
    buttonStyle: {
      borderRadius: 30,
      margin: 7,
      minWidth: 300,
      padding: 14
    },
    titleStyle: {
      fontSize: 14,
      fontWeight: 'bold'
    }
  },
  Divider: {
    style: {
      margin: 7
    }
  }
}

export default () => {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <FirebaseProvider>
          <ApolloProvider client={apolloClient}>
            <MainContainer />
          </ApolloProvider>
        </FirebaseProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  )
}
