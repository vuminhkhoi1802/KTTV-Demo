
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  FlatList,
  Image,
  Platform,
  TouchableOpacity,
  Alert,
} from 'react-native';

import SettingsList from 'react-native-settings-list';
import AppColors from '../config/AppColors';
import {ListItem} from 'react-native-elements';

import Icon from 'react-native-vector-icons/Ionicons';

const list = [
  {
    name: 'ADMIN CENTER',
    avatar_url: null,
    subtitle: 'Administrator',
  },
];

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render () {
    return (
      <View style={{backgroundColor: '#f6f6f6', flex: 1}}>
        <View>
          {list.map ((l, i) => (
            <ListItem
              key={i}
              leftAvatar={{source: {uri: l.avatar_url}}}
              title={l.name}
              subtitle={l.subtitle}
            />
          ))}
        </View>
        <View style={{backgroundColor: '#f6f6f6', flex: 1}}>
          <SettingsList borderColor="#d6d5d9" defaultItemSize={50}>
            <SettingsList.Item
              hasNavArrow={false}
              title="Quản Lý Hệ Thống"
              titleStyle={{
                color: AppColors.primary,
                marginBottom: 10,
                fontWeight: '500',
              }}
              itemWidth={50}
              borderHide={'Both'}
            />
            <SettingsList.Item
              icon={
                <TouchableOpacity
                  style={styles.imageStyle}
                  onPress={() => {
                    Alert.alert ('You Tapped the Icon');
                  }}
                >
                  <Icon
                    name={Platform.OS === 'ios' ? 'ios-more' : 'md-more'}
                    size={24}
                    color={AppColors.primary}
                  />
                </TouchableOpacity>
              }
              hasNavArrow={false}
              itemWidth={70}
              titleStyle={{color: 'black', fontSize: 16}}
              title="Cài Đặt Hệ Thống Trạm"
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Icon
                    name={Platform.OS === 'ios' ? 'ios-more' : 'md-more'}
                    size={24}
                    color={AppColors.primary}
                  />
                </View>
              }
              title="More"
              itemWidth={70}
              titleStyle={{color: 'black', fontSize: 16}}
              hasNavArrow={false}
            />
            <SettingsList.Header headerStyle={{marginTop: -5}} />
            <SettingsList.Item
              hasNavArrow={false}
              title="Quản Lý Camera"
              titleStyle={{
                color: AppColors.primary,
                marginBottom: 10,
                fontWeight: '700',
              }}
              itemWidth={70}
              borderHide={'Both'}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Icon
                    name={Platform.OS === 'ios' ? 'ios-camera' : 'md-camera'}
                    size={24}
                    color={AppColors.primary}
                  />
                </View>
              }
              title="Quản Lý Thông Tin Camera"
              itemWidth={70}
              titleStyle={{color: 'black', fontSize: 16}}
              hasNavArrow={false}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Icon
                    name={
                      Platform.OS === 'ios' ? 'ios-document' : 'md-document'
                    }
                    size={24}
                    color={AppColors.primary}
                  />
                </View>
              }
              title="Báo Cáo Thống Kê Camera"
              itemWidth={70}
              titleStyle={{color: 'black', fontSize: 16}}
              hasNavArrow={false}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Icon
                    name={
                      Platform.OS === 'ios'
                        ? 'ios-reverse-camera'
                        : 'md-reverse-camera'
                    }
                    size={24}
                    color={AppColors.primary}
                  />
                </View>
              }
              title="Điều Khiển Camera"
              itemWidth={70}
              titleStyle={{color: 'black', fontSize: 16}}
              hasNavArrow={false}
            />
            <SettingsList.Header headerStyle={{marginTop: -5}} />
            <SettingsList.Item
              hasNavArrow={false}
              title="Cấu Hình Tần Suất Truyền Tin"
              titleStyle={{
                color: AppColors.primary,
                marginBottom: 10,
                fontWeight: '700',
              }}
              itemWidth={70}
              borderHide={'Both'}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Icon
                    name={Platform.OS === 'ios' ? 'ios-build' : 'md-build'}
                    size={24}
                    color={AppColors.primary}
                  />
                </View>
              }
              title="Cấu hình kết nối qua GPRS cho Trạm"
              itemWidth={70}
              titleStyle={{color: 'black', fontSize: 16}}
              hasNavArrow={false}
            />
            <SettingsList.Item
              icon={
                <View style={styles.imageStyle}>
                  <Icon
                    name={Platform.OS === 'ios' ? 'ios-mail' : 'md-mail'}
                    size={24}
                    color={AppColors.primary}
                  />
                </View>
              }
              title="Cấu hình kết nối qua SMS cho trạm"
              itemWidth={70}
              titleStyle={{color: 'black', fontSize: 16}}
              hasNavArrow={false}
            />
            <SettingsList.Header headerStyle={{marginTop: -5}} />

          </SettingsList>

        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create ({
  imageStyle: {
    marginLeft: 15,
    marginRight: 20,
    alignSelf: 'center',
    width: 20,
    height: 24,
    justifyContent: 'center',
  },
});

// import React from 'react';
// import {View, StyleSheet, Image} from 'react-native';

// import SettingsList from 'react-native-settings-list';
// import {AppColors} from '@app/config';
// import {ListItem} from 'react-native-elements';

// const list = [
//   {
//     name: 'VU MINH KHOI',
//     avatar_url: 'https://i.imgur.com/NJaZT7J.jpg',
//     subtitle: 'Administrator',
//   },
// ];

// export default class SettingsScreen extends React.Component {
//   static navigationOptions = {
//     header: null,
//     // title: "Quản Lý Người Dùng",
//     // alignSelf: 'center',
//     // headerStyle: {
//     //   backgroundColor: AppColors.primary
//     // },
//     // headerTintColor: "#fff",
//     // headerTitleStyle: {
//     //   fontWeight: "bold"
//     // }
//   };

//   constructor () {
//     super ();
//     this.onValueChange = this.onValueChange.bind (this);
//     this.state = {switchValue: false};
//   }
//   render () {
//     const {navigate} = this.props.navigation;
//     return (
//       <View style={{backgroundColor: '#EFEFF4', flex: 1}}>
//         <View>
//           {list.map ((l, i) => (
//             <ListItem
//               key={i}
//               leftAvatar={{source: {uri: l.avatar_url}}}
//               title={l.name}
//               subtitle={l.subtitle}
//             />
//           ))}
//         </View>
//         <View style={{backgroundColor: '#EFEFF4', flex: 1}}>
//           <SettingsList borderColor="#c8c7cc" defaultItemSize={50}>
//             <SettingsList.Header headerStyle={{marginTop: 15}} />
//             <SettingsList.Item
//               icon={
//                 <Image
//                   style={styles.imageStyle}
//                   source={require ('../assets/images/robot-dev.png')}
//                 />
//               }
//               hasSwitch={true}
//               switchState={this.state.switchValue}
//               switchOnValueChange={this.onValueChange}
//               hasNavArrow={false}
//               title="Nhận Thông Báo"
//             />
//             <SettingsList.Item
//               icon={
//                 <Image
//                   style={styles.imageStyle}
//                   source={require ('../assets/images/robot-dev.png')}
//                 />
//               }
//               title="Quản Lý Camera"
//               titleInfo="Camera 1"
//               titleInfoStyle={styles.titleInfoStyle}
//               onPress={() =>
//                 navigate ('SettingsCamera', {setting: 'Quản Lý Camera'})}
//             />
//             <SettingsList.Item
//               icon={
//                 <Image
//                   style={styles.imageStyle}
//                   source={require ('../assets/images/robot-dev.png')}
//                 />
//               }
//               title="Quản Lý Thông Tin Camera"
//               titleInfo="Chi tiết"
//               titleInfoStyle={styles.titleInfoStyle}
//               onPress={() =>
//                 navigate ('SettingDetail', {
//                   setting: 'Quản Lý Thông Tin Camera',
//                 })}
//             />
//             <SettingsList.Item
//               icon={
//                 <Image
//                   style={styles.imageStyle}
//                   source={require ('../assets/images/robot-dev.png')}
//                 />
//               }
//               title="Báo Cáo Thống Kê Camera"
//               onPress={() =>
//                 navigate ('SettingDetail', {
//                   setting: 'Báo Cáo Thống Kê Camera',
//                 })}
//             />
//             <SettingsList.Item
//               icon={
//                 <Image
//                   style={styles.imageStyle}
//                   source={require ('../assets/images/robot-dev.png')}
//                 />
//               }
//               title="Điều Khiến Camera"
//               titleInfo="Off"
//               titleInfoStyle={styles.titleInfoStyle}
//               onPress={() =>
//                 navigate ('SettingDetail', {setting: 'Điều Khiến Camera'})}
//             />
//             <SettingsList.Header headerStyle={{marginTop: 15}} />
//             <SettingsList.Item
//               icon={
//                 <Image
//                   style={styles.imageStyle}
//                   source={require ('../assets/images/robot-dev.png')}
//                 />
//               }
//               title="Cấu Hình Tần suất truyền tin"
//               onPress={() =>
//                 navigate ('SettingDetail', {
//                   setting: 'Cấu Hình Tần suất truyền tin',
//                 })}
//             />
//             <SettingsList.Item
//               icon={
//                 <Image
//                   style={styles.imageStyle}
//                   source={require ('../assets/images/robot-dev.png')}
//                 />
//               }
//               title="Cấu Hình Kêt Nối Qua GPRS Cho Trạm"
//               onPress={() =>
//                 navigate ('SettingDetail', {
//                   setting: 'Cấu Hình Kêt Nối Qua GPRS Cho Trạm',
//                 })}
//             />
//             <SettingsList.Item
//               icon={
//                 <Image
//                   style={styles.imageStyle}
//                   source={require ('../assets/images/robot-dev.png')}
//                 />
//               }
//               title="Cấu Hình Kêt Nối Qua SMS Cho Trạm"
//               onPress={() =>
//                 navigate ('SettingDetail', {
//                   setting: 'Cấu Hình Kêt Nối Qua SMS Cho Trạm',
//                 })}
//             />
//           </SettingsList>
//         </View>
//       </View>
//     );
//   }
//   onValueChange (value) {
//     this.setState ({switchValue: value});
//   }
// }

// const styles = StyleSheet.create ({
//   imageStyle: {
//     marginLeft: 15,
//     marginRight: 20,
//     alignSelf: 'center',
//     width: 20,
//     height: 24,
//     justifyContent: 'center',
//   },
// });
