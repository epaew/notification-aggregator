import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { createHeader } from '../../components/Header'
import { SigninScreen } from './Signin'
import { SignupScreen } from './Signup'

export type AuthenticationStackParamList = {
  Signin: undefined
  Signup: undefined
}

const Stack = createStackNavigator<AuthenticationStackParamList>()

export const AuthenticationStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName='Signin' screenOptions={{ header: createHeader(false) }}>
      <Stack.Screen name='Signin' component={SigninScreen} />
      <Stack.Screen name='Signup' component={SignupScreen} />
    </Stack.Navigator>
  )
}
