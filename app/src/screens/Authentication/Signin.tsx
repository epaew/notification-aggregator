import React from 'react'
import { Button, Card, Divider, Text } from 'react-native-elements'
import { KeyboardAvoidingView, ScrollView, StyleSheet } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import { AuthenticationForm } from '../../components/Authentication/Form'
import { AuthenticationStackParamList } from '.'
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

interface Props {
  navigation: StackNavigationProp<AuthenticationStackParamList>
}

export const SigninScreen: React.FC<Props> = ({ navigation }) => {
  const { signIn: handleSignIn } = useFirebase()

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <ScrollView bounces={false}>
        <Card>
          <Text h3 style={styles.title}>
            Welcome
          </Text>
          <AuthenticationForm
            buttonProps={{ title: 'Sign In', onSubmit: handleSignIn.withEmail }}
          />
          <Divider />
          {/*
          <SocialIcon button title='Google' type='google' />
          <SocialIcon button title='GitHub' type='github' onPress={handleSignIn.withGithub} />
          <Divider />
          */}
          <Button
            title='Sign Up'
            type='clear'
            onPress={() => navigation.push('Signup')}
          />
        </Card>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
