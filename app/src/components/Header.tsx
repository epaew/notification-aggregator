import React from 'react'
import { Header, Icon } from 'react-native-elements'
import { StackHeaderProps } from '@react-navigation/stack'
import { DrawerActions } from '@react-navigation/native'

type NavigationIconProps = {
  navigation: StackHeaderProps['navigation']
  previous: StackHeaderProps['previous']
}

export const createHeader = (showMenuIcon = true) => {
  const NavigationIcon: React.FC<NavigationIconProps> = ({ navigation, previous }) => {
    if (previous) {
      return (
        <Icon name='arrow-back' color='#fff' underlayColor='transparent' onPress={() => navigation.pop()} />
      )
    } else if (showMenuIcon) {
      return (
        <Icon name='menu' color='#fff' underlayColor='transparent' onPress={() => navigation.dispatch(DrawerActions.openDrawer())} />
      )
    } else {
      return null
    }
  }

  const MyHeader: React.FC<StackHeaderProps> = ({ navigation, previous, scene }) => {
    const title = scene.descriptor.options.title ?? scene.route.name

    return (
      <Header
        leftComponent={<NavigationIcon navigation={navigation} previous={previous} />}
        centerComponent={{ text: title, style: { color: '#fff', fontWeight: 'bold' } }} // TODO: アイコン画像か何かに差し替える
      />
    )
  }

  return MyHeader
}
