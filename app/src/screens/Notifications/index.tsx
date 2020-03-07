import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { ListNotificationScreen } from './List'

const Stack = createStackNavigator()

export const NotificationStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Notifications' component={ListNotificationScreen} />
      {/* <Stack.Screen name='ShowNotification' component={} /> */}
    </Stack.Navigator>
  )
}
