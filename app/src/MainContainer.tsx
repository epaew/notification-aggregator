import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import { useFirebase } from './contexts'
import { AuthenticationStack, ChannelStack, HomeScreen, LoadingScreen } from './screens'

const Drawer = createDrawerNavigator()

export default () => {
  const { loading, currentAuth } = useFirebase()

  if (loading) {
    return <LoadingScreen />
  } else if (!currentAuth) {
    return (
      <NavigationContainer>
        <AuthenticationStack />
      </NavigationContainer>
    )
  } else {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName='Home' drawerType='slide'>
          <Drawer.Screen name='Home' component={HomeScreen} />
          <Drawer.Screen name='Channels' component={ChannelStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}
