import React from 'react'
import { Button, Text } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet } from 'react-native'

import { useFirebase } from '../../contexts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export const ListNotificationScreen: React.FC = () => {
  const { signOut } = useFirebase()

  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title='Sign Out' onPress={signOut} />
    </SafeAreaView>
  )
}
