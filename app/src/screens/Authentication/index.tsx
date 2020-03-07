import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { createHeader } from '../../components/Header'
import { SigninScreen } from './Signin'

const Stack = createStackNavigator()

export const AuthenticationStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName='Signin' screenOptions={{ header: createHeader(false) }}>
      <Stack.Screen name='Signin' component={SigninScreen} />
    </Stack.Navigator>
  )
}
