import React from 'react'
import { Card, Icon, Text } from 'react-native-elements'
import { ScrollView, StyleSheet, View } from 'react-native'
import { StackNavigationProp } from '@react-navigation/stack'

import { ChannelStackParamList } from '.'
import { useGetChannelsQuery } from '../../graphql'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  addIcon: {
    fontSize: 52
  },
  addIconContainer: {
    position: 'absolute',
    bottom: 30,
    right: 30
  }
})

type Props = {
  navigation: StackNavigationProp<ChannelStackParamList>
}

export const ListChannelScreen: React.FC<Props> = ({ navigation }) => {
  const { data, loading } = useGetChannelsQuery()

  return (
    <View style={styles.container}>
      <ScrollView>
        {!loading && data?.channels.map(channel => (
          <Card>
            <Text h1>{channel.name}</Text>
          </Card>
        ))}
      </ScrollView>
      <Icon
        reverse
        color='red'
        name='add'
        iconStyle={styles.addIcon}
        containerStyle={styles.addIconContainer}
        onPress={() => navigation.push('CreateChannel')}
      />
    </View>
  )
}
