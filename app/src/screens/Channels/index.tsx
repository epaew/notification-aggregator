import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { ListChannelScreen } from './List'

const Stack = createStackNavigator()

export const ChannelStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Channels' component={ListChannelScreen} />
      {/* <Stack.Screen name='CreateChannel' component={} /> */}
      {/* <Stack.Screen name='EditChannel' component={} /> */}
      {/* <Stack.Screen name='ShowChannel' component={} /> */}
    </Stack.Navigator>
  )
}
