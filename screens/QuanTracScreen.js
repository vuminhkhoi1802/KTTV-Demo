import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ListView,
  Image,
  Dimensions,
  TouchableHighlight,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import AppColors from '../config/AppColors';
import SettingsList from 'react-native-settings-list';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform} from 'expo-core';

export default class HomeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };

  render () {
    const {navigate} = this.props.navigation;

    return (
      <View style={{backgroundColor: '#EFEFF4', flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <SettingsList borderColor="#d6d5d9" defaultItemSize={50}>
            <SettingsList.Item
              hasNavArrow={false}
              title="Thông tin trạm Quan Trắc"
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
                <View style={styles.img}>
                  <Icon
                    name={Platform.OS === 'ios' ? 'ios-list' : 'md-list'}
                    size={24}
                    color={AppColors.primary}
                  />
                </View>
              }
              title="Quản Lý Thông Tin Trạm Quan Trắc"
              onPress={() =>
                navigate ('QuanTracList', {
                  title: 'Quản Lý Thông Tin Trạm Quan Trắc',
                })}
            />
            <SettingsList.Header headerStyle={{marginTop: -5}} />
            <SettingsList.Item
              hasNavArrow={false}
              title="Thông tin Quan Trắc"
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
                <View style={styles.img}>
                  <Icon
                    name={Platform.OS === 'ios' ? 'ios-warning' : 'md-warning'}
                    size={24}
                    color={AppColors.primary}
                  />
                </View>
              }
              title="Quản Lý Thông Tin Cảnh Báo"
              onPress={() =>
                navigate ('WarningInfoList', {
                  title: 'Quản Lý Thông Tin Cảnh Báo',
                })}
            />
            <SettingsList.Item
              icon={
                <View style={styles.img}>
                  <Icon
                    name={Platform.OS === 'ios' ? 'ios-warning' : 'md-warning'}
                    size={24}
                    color={AppColors.primary}
                  />
                </View>
              }
              title="Quản Lý Thông Tin Lũ Lụt"
              onPress={() =>
                navigate ('FloodLevelsList', {
                  title: 'Quản Lý Thông Tin Cấp Độ Lũ',
                })}
            />

          </SettingsList>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create ({
  container: {
    backgroundColor: AppColors.primary,
    flex: 1,
  },
  img: {
    marginLeft: 15,
    marginRight: 20,
    alignSelf: 'center',
    width: 24,
    height: 24,
    justifyContent: 'center',
  },
});
