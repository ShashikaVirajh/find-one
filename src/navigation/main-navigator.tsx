import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerNavigator from './drawer-navigator';

import { routes } from 'constants/routes.constant';
import HomeScreen from 'screens/home/home.container';

const MainStack = createStackNavigator();

const MainNavigator = () => (
  <NavigationContainer>
    <MainStack.Navigator headerMode='none' initialRouteName={routes.HOME_SCREEN}>
      <MainStack.Screen name={'drawer'} component={DrawerNavigator} />
      <MainStack.Screen name={routes.SIGN_IN_SCREEN} component={HomeScreen} />
    </MainStack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
