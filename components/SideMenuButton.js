import React from 'react'
import { StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import SideMenuDrawer from './SideMenuDrawer'
export default class SideMenuButton extends React.Component {
  render () {
    return (
      <Ionicons
        name={Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
        color='white'
        size={32}
        style={styles.menuIcon}
        onPress={() => {
          this.props.navigation.openDrawer()
        }}
      />
    )
  }
}

const styles = StyleSheet.create({
  menuIcon: {
    zIndex: 9,
    position: 'absolute',
    top: 10,
    left: 20
  }
})
