import React from "react";
import { Dimensions } from "react-native";
import { createDrawerNavigator, createAppContainer, createStackNavigator } from "react-navigation";

import SideMenuDrawer from "../components/SideMenuDrawer";
import ForecastInfo from '../screens/ForecastInfo'
import TabStack from './MainTabNavigator';
import Icon from 'react-native-vector-icons/Ionicons';
import AppColors from '../config/AppColors'
import { Platform } from "expo-core";

const WIDTH = Dimensions.get("window").width;
const SideMenuConfig = {
  drawerWidth: WIDTH * 0.83,
  contentComponent: ({ navigation }) => {
    return <SideMenuDrawer navigation={navigation} />;
  }
};

const DashBoardStackNavigator = createStackNavigator(
  {
    BottomNavigator: TabStack
  },
  {
    defaultNavigationOptions:({navigation}) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        headerLeft: (
          <Icon style={{ paddingLeft: 10, color: '#FFFFFF' }} 
          name = {Platform.OS === 'ios' ? 'ios-menu' : 'md-menu'}
          size={30}
          onPress={() => navigation.openDrawer()}  
          />
        ),
        headerStyle:{
          backgroundColor: AppColors.primary
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },

      }
    }
  }
)

const SideMenuNavigator = createDrawerNavigator(
  {
    Dashboard: {
      screen: DashBoardStackNavigator
    },
    Forecast: {
      screen: ForecastInfo
    },
  },
  SideMenuConfig
);

export default createAppContainer(SideMenuNavigator);
