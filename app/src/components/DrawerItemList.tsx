import React from 'react'
import {
  CommonActions,
  DrawerActions,
  DrawerNavigationState
} from '@react-navigation/native'
import { ListItem } from 'react-native-elements'

interface DrawerItemListProps {
  navigation: any
  state: DrawerNavigationState
}
export const DrawerItemList: React.FC<DrawerItemListProps> = ({
  navigation,
  state
}) => {
  const items = state.routes.map((route, i) => {
    const focused = i === state.index
    const onPress = () => {
      const action = focused
        ? DrawerActions.closeDrawer()
        : CommonActions.navigate(route.name)
      navigation.dispatch(action)
    }
    // const { title, drawerLabel, drawerIcon } = descriptors[route.key].options

    return <ListItem key={route.key} onPress={onPress} title={route.name} />
  })

  return <>{items}</>
}
