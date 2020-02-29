import React from 'react'
import { Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useFirebase } from '../../contexts'

export const SigninScreen: React.FC = () => {
  const { signInAsAnonymous, signInWithGithub, signInWithGoogle } = useFirebase()

  return (
    <SafeAreaView>
      {__DEV__ && <Button title='Anonymous' onPress={signInAsAnonymous} />}
      <Button title='GitHub' onPress={signInWithGithub} />
      <Button title='Google' onPress={signInWithGoogle} />
    </SafeAreaView>
  )
}
