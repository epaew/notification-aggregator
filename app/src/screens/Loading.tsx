import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StyleSheet, Text } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export const LoadingScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Now Loading...</Text>
    </SafeAreaView>
  )
}
