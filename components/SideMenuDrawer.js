import React from 'react'
import {
  View,
  Text,
  Platform,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image
} from 'react-native'
import { AppColors } from '@app/config'

export default class SideMenuDrawer extends React.Component {
  navLink (nav, text) {
    return (
      <TouchableOpacity
        style={{ height: 50 }}
        onPress={() => this.props.navigation.navigate(nav)}
      >
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    )
  }
  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.scroller}>
          <View style={styles.topLinks}>
            <View style={styles.profile}>
              <View style={styles.imgView}>
                <Image
                  style={styles.img}
                  source={require('../assets/images/cuckttv.png')}
                />
              </View>
              <View style={styles.profileText}>
                <Text style={styles.name}>Khí Tượng Thủy Văn</Text>
              </View>
            </View>
          </View>
          <View style={styles.bottomLinks}>
            {/* {this.navLink('FlashFloodNewsAndInfoTab', 'Thông tin Lũ Quét')}
            {this.navLink('RainNewsAndInfoTab','Thông tin Mưa Lớn')}
            {this.navLink('FloodNewsAndInfoTab','Thông tin Lũ Lụt')}
            {this.navLink('SurgesNewsAndInfoTab','Thông tin Nước Dâng')}
            {this.navLink('MudSlideNewsAndInfoTab', 'Thông tin Lở Đất')} */}
            {this.navLink('StormNewsAndInfoTab','Thông tin Bão')}
            {this.navLink('CalamityNewsAndInfoTab','Thông tin Thiên Tai')}
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <Text style={styles.description}>©KTTV</Text>
          <Text style={styles.version}>V1.0</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.primary
  },
  link: {
    flex: 1,
    fontSize: 15,
    padding: 6,
    paddingLeft: 14,
    margin: 5,
    textAlign: 'left'
  },
  topLinks: {
    height: 100,
    flex: 1,
    backgroundColor: AppColors.primary,
    justifyContent:'center'
  },
  bottomLinks: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 450,
    fontSize: 12
  },
  profile: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#777777'
  },
  imgView: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20
  },
  img: {
    height: 32,
    width: 32,
    borderRadius: 32
  },
  profileText: {
    flex: 3,
    flexDirection: 'column',
    justifyContent: 'center'
  },
  name: {
    fontSize: 20,
    paddingBottom: 5,
    color: '#FFFFFF',
    textAlign: 'left',
    paddingRight: 10,
    paddingLeft: -10
  },
  footer: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderColor: 'lightgray'
  },
  version: {
    flex: 1,
    textAlign: 'right',
    marginRight: 20,
    color: 'gray'
  },
  description: {
    flex: 1,
    marginLeft: 20,
    fontSize: 16
  },
  scroller: {
    flex: 1
  }
})
