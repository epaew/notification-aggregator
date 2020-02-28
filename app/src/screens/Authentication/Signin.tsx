import React from 'react'
import { Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { useFirebase } from '../../contexts'

export const SigninScreen: React.FC = () => {
  const { signInWithGithub } = useFirebase()

  return (
    <SafeAreaView>
      <Button title='GitHub' onPress={signInWithGithub} />
    </SafeAreaView>
  )
}
