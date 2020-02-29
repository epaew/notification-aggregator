import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

import { useFirebase } from '../contexts'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export const HomeScreen: React.FC = () => {
  const { signOut } = useFirebase()

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title='SignOut' onPress={signOut} />
    </View>
  )
}
