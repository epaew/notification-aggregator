import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { SigninScreen } from './Signin'

const Stack = createStackNavigator()

export const AuthenticationStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Signin' component={SigninScreen} />
    </Stack.Navigator>
  )
}
