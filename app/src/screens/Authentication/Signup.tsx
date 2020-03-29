import React from 'react'
import { Card, Text } from 'react-native-elements'
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'

import { AuthenticationForm } from '../../components/Authentication/Form'
import { useFirebase } from '../../contexts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
  },
})

export const SignupScreen: React.FC = () => {
  const { signUpWithEmail } = useFirebase()

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <ScrollView bounces={false}>
        <Card>
          <Text h4 style={styles.title}>
            Sign up with email and password
          </Text>
          <AuthenticationForm
            buttonProps={{ title: 'Sign Up', onSubmit: signUpWithEmail }}
          />
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
