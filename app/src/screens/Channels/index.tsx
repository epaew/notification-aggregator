import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { createHeader } from '../../components/Header'
import { ListChannelScreen } from './List'
import { CreateChannelScreen } from './Create'

export type ChannelStackParamList = {
  Channels: undefined
  CreateChannel: undefined
}
const Stack = createStackNavigator<ChannelStackParamList>()

export const ChannelStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName='Channels' screenOptions={{ header: createHeader() }}>
      <Stack.Screen name='Channels' component={ListChannelScreen} />
      <Stack.Screen name='CreateChannel' component={CreateChannelScreen} />
      {/* <Stack.Screen name='EditChannel' component={} /> */}
      {/* <Stack.Screen name='ShowChannel' component={} /> */}
    </Stack.Navigator>
  )
}
