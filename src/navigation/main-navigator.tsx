import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerNavigator from './drawer-navigator';

import { screenNames } from 'constants/screen-names.constant';
import HomeScreen from 'screens/home/home.screen';

const Stack = createStackNavigator();

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode='none' initialRouteName={screenNames.HOME_SCREEN}>
      <Stack.Screen name={'drawer'} component={DrawerNavigator} />
      <Stack.Screen name={screenNames.SIGN_IN_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
