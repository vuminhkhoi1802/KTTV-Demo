import React from 'react';
import {Platform, Dimensions} from 'react-native';
import {createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import BaoCaoScreen from '../screens/BaoCao';
import StationStats from '../screens/BaoCao/StationStats';
import UserStatsGeneral
  from '../screens/BaoCao/UserDetailedStats/UserStatsGeneral';
import UserStatsInteraction
  from '../screens/BaoCao/UserDetailedStats/UserStatsInteractions';
import SettingDetailScreen from '../screens/SettingDetail';
import SettingsScreen from '../screens/SettingsScreen';
import DetailScreen from '../screens/DetailScreen';
import QuanTracScreen from '../screens/QuanTracScreen';
import SettingsCameraScreen from '../screens/Settings/SettingsCameraScreen';
import QuanTracListScreen from '../screens/QuanTrac/Lists/StationsListScreen';
import QuanTracDetailScreen
  from '../screens/QuanTrac/Details/StationsDetailScreen';
import WarningInfoListScreen
  from '../screens/QuanTrac/Lists/WarningInfoListScreen';
import WarningInfoDetailScreen
  from '../screens/QuanTrac/Details/WarningInfoDetailScreen';
import FloodLevelsListScreen
  from '../screens/QuanTrac/Lists/FloodLevelsListScreen';
import FloodLevelsDetailScreen
  from '../screens/QuanTrac/Details/FloodLevelsDetailScreen';
import ForecastInfo from '../screens/ForecastInfo';
// import FlashFloodNewsAndInfoTab from '../screens/NewsAndInfo/Tabs/FlashFloodNewsAndInfoTab'
// import FlashFloodNewsAndInfoDetail from '../screens/NewsAndInfo/Details/FlashFloodNewsAndInfoDetail'
// import RainNewsAndInfoTab from '../screens/NewsAndInfo/Tabs/RainNewsAndInfoTab'
// import RainNewsAndInfoDetail from '../screens/NewsAndInfo/Details/RainNewsAndInfoDetail'
// import FloodNewsAndInfoTab from '../screens/NewsAndInfo/Tabs/FloodNewsAndInfoTab'
// import FloodNewsAndInfoDetail from '../screens/NewsAndInfo/Details/FloodNewsAndInfoDetail'
// import SurgesNewsAndInfoTab from '../screens/NewsAndInfo/Tabs/SurgesNewsAndInfoTab'
// import SurgesNewsAndInfoDetail from '../screens/NewsAndInfo/Details/SurgesNewsAndInfoDetail'
// import MudSlideNewsAndInfoTab from '../screens/NewsAndInfo/Tabs/MudSlideNewsAndInfoTab'
// import MudSlideNewsAndInfoDetail from '../screens/NewsAndInfo/Details/MudSlideNewsAndInfoDetail'

import StormNewsAndInfoTab
  from '../screens/NewsAndInfo/Tabs/StormNewsAndInfoTab';
import StormNewsAndInfoDetail
  from '../screens/NewsAndInfo/Details/StormNewsAndInfoDetail';
import CalamityNewsAndInfoTab
  from '../screens/NewsAndInfo/Tabs/CalamityNewsAndInfoTab';
import CalamityNewsAndInfoDetail
  from '../screens/NewsAndInfo/Details/CalamityNewsAndInfoDetail';

const HomeStack = createStackNavigator (
  {
    Home: {screen: HomeScreen},
    Detail: {screen: DetailScreen},
    Forecast: {screen: ForecastInfo},
    // FlashFloodNewsAndInfoTab: { screen: FlashFloodNewsAndInfoTab },
    // FlashFloodNewsAndInfoDetail: { screen: FlashFloodNewsAndInfoDetail },
    // RainNewsAndInfoTab: { screen: RainNewsAndInfoTab },
    // RainNewsAndInfoDetail: { screen: RainNewsAndInfoDetail },
    // FloodNewsAndInfoTab: { screen: FloodNewsAndInfoTab },
    // FloodNewsAndInfoDetail: { screen: FloodNewsAndInfoDetail },
    // SurgesNewsAndInfoTab: { screen: SurgesNewsAndInfoTab },
    // SurgesNewsAndInfoDetail: { screen: SurgesNewsAndInfoDetail },
    // MudSlideNewsAndInfoTab: { screen: MudSlideNewsAndInfoTab },
    // MudSlideNewsAndInfoDetail: { screen: MudSlideNewsAndInfoDetail }
    StormNewsAndInfoTab: {screen: StormNewsAndInfoTab},
    StormNewsAndInfoDetail: {screen: StormNewsAndInfoDetail},
    CalamityNewsAndInfoTab: {screen: CalamityNewsAndInfoTab},
    CalamityNewsAndInfoDetail: {screen: CalamityNewsAndInfoDetail},
  },
  {
    initialRouteName: 'Home',
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'}
    />
  ),
};

const BaoCaoStack = createStackNavigator ({
  BaoCao: {screen: BaoCaoScreen},
  UserStatsGeneral: {screen: UserStatsGeneral},
  UserStatsInteraction: {screen: UserStatsInteraction},
  StationStats: {screen: StationStats},
});

BaoCaoStack.navigationOptions = {
  tabBarLabel: 'Báo Cáo',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-document' : 'md-document'}
    />
  ),
};

const QuanTracStack = createStackNavigator (
  {
    QuanTrac: {screen: QuanTracScreen},
    QuanTracList: {screen: QuanTracListScreen},
    QuanTracDetail: {screen: QuanTracDetailScreen},
    WarningInfoList: {screen: WarningInfoListScreen},
    WarningInfoDetail: {screen: WarningInfoDetailScreen},
    FloodLevelsList: {screen: FloodLevelsListScreen},
    FloodLevelsDetail: {screen: FloodLevelsDetailScreen},
  },
  {
    initialRouteName: 'QuanTrac',
  }
);

QuanTracStack.navigationOptions = {
  tabBarLabel: 'Quan Trắc',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-flashlight' : 'md-flashlight'}
    />
  ),
};

const SettingsStack = createStackNavigator (
  {
    Settings: {screen: SettingsScreen},
    SettingDetail: {screen: SettingDetailScreen},
    SettingsCamera: {screen: SettingsCameraScreen},
  },
  {
    initialRouteName: 'Settings',
  }
);

SettingsStack.navigationOptions = {
  tabBarLabel: 'Thiết Lập',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default (TabStack = createBottomTabNavigator ({
  HomeStack,
  BaoCaoStack,
  QuanTracStack,
  SettingsStack,
}));
