import React from 'react'
import { apolloClient, useGetChannelsQuery } from './src/graphql'
import { ApolloProvider } from '@apollo/react-hooks'
import { StyleSheet, Text, View } from 'react-native'

export default function App () {
  const { data, loading } = useGetChannelsQuery({
    client: apolloClient
  })

  return (
    <ApolloProvider client={apolloClient}>
      <View style={styles.container}>
        <Text>Open up App.tsx to start working on your app!</Text>
        <Text>{!loading && JSON.stringify(data?.channels, null, 2)}</Text>
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
