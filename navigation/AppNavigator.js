import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SideMenuNavigator from './SideMenuNavigator';

export default createAppContainer(createSwitchNavigator({
  // MainTabNavigator: MainTabNavigator,
  SideMenuNavigator:SideMenuNavigator
}));
