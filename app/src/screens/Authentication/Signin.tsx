import React from 'react'
import { Button, Divider, Input, SocialIcon, Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'

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

export const SigninScreen: React.FC = () => {
  const { signIn: handleSignIn } = useFirebase()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <ScrollView bounces={false}>
          <Text h3 style={styles.title}>Welcome</Text>
          <Input
            placeholder='Email'
            keyboardType='email-address'
          />
          <Input
            placeholder='Password'
            secureTextEntry
          />
          <Button title='Sign In' />
          <Divider />
          <SocialIcon button title='Google' type='google' />
          <SocialIcon button title='GitHub' type='github' onPress={handleSignIn.withGithub} />
          {__DEV__ && <Button title='Anonymous' type='clear' onPress={handleSignIn.asAnonymous} />}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
