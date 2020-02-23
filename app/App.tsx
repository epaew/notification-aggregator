import React from 'react'
import { apolloClient } from './src/graphql'
import { ApolloProvider } from '@apollo/react-hooks'
import { StyleSheet, Text, View } from 'react-native'

export default function App () {
  return (
    <ApolloProvider client={apolloClient}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </ApolloProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
