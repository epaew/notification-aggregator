import React from 'react'
import { Avatar, AvatarProps, ListItem, Text } from 'react-native-elements'
import {
  DrawerContentComponentProps,
  DrawerContentScrollView
} from '@react-navigation/drawer'
import { View } from 'react-native'

import { DrawerItemList } from './DrawerItemList'
import { useGetCurrentUserQuery } from '../graphql'
import { useFirebase } from '../contexts'

const ProfileSummary: React.FC = () => {
  const avatarProps: AvatarProps = {
    showEditButton: true,
    size: 'medium',
    rounded: true
  }

  const { data, error, loading } = useGetCurrentUserQuery()

  if (loading) return null
  if (error) {
    console.error(error)
    return <Text>{error.message}</Text>
  }

  const uri = data?.currentUser?.photoURL
  if (uri) {
    avatarProps.source = { uri }
  } else {
    avatarProps.icon = { name: 'add-a-photo' }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', paddingBottom: 14 }}>
      <Avatar {...avatarProps} />
      <Text>{data?.currentUser?.displayName}</Text>
    </View>
  )
}

const SignOutListItem: React.FC = () => {
  const { signOut } = useFirebase()

  return (
    <ListItem
      rightIcon={{ name: 'exit-to-app' }}
      title='Sign Out'
      onPress={signOut}
    />
  )
}

export const DrawerContent: React.FC<DrawerContentComponentProps> = props => {
  return (
    <DrawerContentScrollView {...props} bounces={false}>
      <ProfileSummary />
      <DrawerItemList {...props} />
      <SignOutListItem />
    </DrawerContentScrollView>
  )
}
