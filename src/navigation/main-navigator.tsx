import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DrawerNavigator from './drawer-navigator';

import { routes } from 'constants/routes.constant';
import HomeScreen from 'screens/home/home.screen';

const Stack = createStackNavigator();

const MainNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode='none' initialRouteName={routes.HOME_SCREEN}>
      <Stack.Screen name={'drawer'} component={DrawerNavigator} />
      <Stack.Screen name={routes.SIGN_IN_SCREEN} component={HomeScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default MainNavigator;
