import React from 'react'
import { Button, Divider, Text } from 'react-native-elements'
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StackNavigationProp } from '@react-navigation/stack'

import { AuthenticationForm } from '../../components/Authentication/Form'
import { AuthenticationStackParamList } from '.'
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

type Props = {
  navigation: StackNavigationProp<AuthenticationStackParamList>
}

export const SigninScreen: React.FC<Props> = ({ navigation }) => {
  const { signIn: handleSignIn } = useFirebase()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <ScrollView bounces={false}>
          <Text h3 style={styles.title}>Welcome</Text>
          <AuthenticationForm buttonProps={{ title: 'Sign In', onSubmit: handleSignIn.withEmail }} />
          <Divider />
          {/*
          <SocialIcon button title='Google' type='google' />
          <SocialIcon button title='GitHub' type='github' onPress={handleSignIn.withGithub} />
          <Divider />
          */}
          <Button title='Sign Up' type='clear' onPress={() => navigation.push('Signup')} />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}
