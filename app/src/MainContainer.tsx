import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import { useFirebase } from './contexts'
import { AuthenticationStack, ChannelStack, NotificationStack, LoadingScreen } from './screens'

export type DrawerParamList = {
  Channels: undefined
  Notifications: undefined
  Users: undefined
  Preference: undefined
}
const Drawer = createDrawerNavigator<DrawerParamList>()

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
        <Drawer.Navigator initialRouteName='Notifications' drawerType='slide'>
          <Drawer.Screen name='Notifications' component={NotificationStack} />
          <Drawer.Screen name='Channels' component={ChannelStack} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }
}
