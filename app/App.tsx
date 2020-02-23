import React from 'react'
import { apolloClient } from './src/graphql'
import { ApolloProvider } from '@apollo/react-hooks'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { ChannelsScreen, HomeScreen } from './src/screens'

const Stack = createStackNavigator()

export default function App () {
  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Channels' component={ChannelsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  )
}
