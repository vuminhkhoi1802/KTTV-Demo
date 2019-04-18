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
  Platform,
} from 'react-native';
import AppColors from '../config/AppColors';
import SettingsList from 'react-native-settings-list';
import Icon from 'react-native-vector-icons/Ionicons';

export default class BaoCao extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      header: null,
    };
  };
  constructor (props) {
    super (props);

    const ds = new ListView.DataSource ({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows ([
        {
          image: 'https://picsum.photos/200/300?image=1069',
          title: 'Thống Kê Người Dùng',
          navigation: 'UserStats',
        },
        {
          image: 'https://picsum.photos/g/200/300',
          title: 'Thống Kê Trạm Quan Trắc',
          navigation: 'StationStats',
        },
      ]),
    };
  }

  render () {
    const {navigate} = this.props.navigation;
    return (
      <View style={{backgroundColor: '#EFEFF4', flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <SettingsList borderColor="#d6d5d9" defaultItemSize={50}>
            <SettingsList.Item
              hasNavArrow={false}
              title="Trạm Quan Trắc"
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
                    name={Platform.OS === 'ios' ? 'ios-stats' : 'md-stats'}
                    size={24}
                    color={AppColors.primary}
                  />
                </View>
              }
              title="Thống Kê Trạm Quan Trắc Theo Kiểu Trạm "
              onPress={() =>
                navigate ('StationStats', {
                  title: 'Thống Kê Trạm Quan Trắc Theo Kiểu Trạm',
                })}
            />
            <SettingsList.Header headerStyle={{marginTop: -5}} />
            <SettingsList.Item
              hasNavArrow={false}
              title="Người Dùng"
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
                    name={Platform.OS === 'ios' ? 'ios-stats' : 'md-stats'}
                    size={24}
                    color={AppColors.primary}
                  />
                </View>
              }
              title="Thống Kê Người Dùng"
              onPress={() =>
                navigate ('UserStatsGeneral', {
                  title: 'Thống Kê Người Dùng',
                })}
            />
            <SettingsList.Item
              icon={
                <View style={styles.img}>
                  <Icon
                    name={Platform.OS === 'ios' ? 'ios-stats' : 'md-stats'}
                    size={24}
                    color={AppColors.primary}
                  />
                </View>
              }
              title="Thống Kê Thao tác Người Dùng"
              onPress={() =>
                navigate ('UserStatsInteraction', {
                  title: 'Thống Kê Thao tác Người Dùng',
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
    backgroundColor: '#EFEFF4',
    flex: 1,
  },
  item: {
    margin: 5,
    flexDirection: 'row',
  },
  img: {
    marginLeft: 15,
    marginRight: 20,
    alignSelf: 'center',
    width: 24,
    height: 24,
    justifyContent: 'center',
  },

  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: AppColors.grey,
  },
});
