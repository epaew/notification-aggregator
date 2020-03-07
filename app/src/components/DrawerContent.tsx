import React from 'react'
import { Avatar, AvatarProps, Text } from 'react-native-elements'
import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer'
import { View } from 'react-native'

import { DrawerItemList } from './DrawerItemList'
import { useFirebase } from '../contexts'

const ProfileSummary: React.FC = () => {
  const avatarProps: AvatarProps = {
    showEditButton: true,
    size: 'medium',
    rounded: true
  }

  const { currentAuth } = useFirebase()
  const uri = currentAuth?.photoURL
  if (uri) {
    avatarProps.source = { uri }
  } else {
    avatarProps.icon = { name: 'add-a-photo' }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Avatar {...avatarProps} />
      <Text>{currentAuth?.displayName}</Text>
      <Text>{currentAuth?.email}</Text>
    </View>
  )
}

export const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <ProfileSummary />
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}
