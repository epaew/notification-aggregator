import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { createHeader } from '../../components/Header'
import { ListNotificationScreen } from './List'

const Stack = createStackNavigator()

export const NotificationStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName='Notifications' screenOptions={{ header: createHeader() }}>
      <Stack.Screen name='Notifications' component={ListNotificationScreen} />
      {/* <Stack.Screen name='ShowNotification' component={} /> */}
    </Stack.Navigator>
  )
}
