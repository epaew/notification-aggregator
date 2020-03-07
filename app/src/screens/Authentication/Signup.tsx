import React from 'react'
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { AuthenticationForm } from '../../components/Authentication/Form'
import { useFirebase } from '../../contexts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: {
    textAlign: 'center'
  }
})

export const SignupScreen: React.FC = () => {
  const { signUpWithEmail } = useFirebase()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <ScrollView bounces={false}>
          <AuthenticationForm buttonProps={{ title: 'Sign Up', onSubmit: signUpWithEmail }} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
