import React from 'react'
import { Text, View } from 'react-native'
import { useGetChannelsQuery } from '../graphql'

export const ChannelsScreen: React.FC = () => {
  const { data, loading } = useGetChannelsQuery()

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>{!loading && JSON.stringify(data?.channels, null, 2)}</Text>
    </View>
  )
}
