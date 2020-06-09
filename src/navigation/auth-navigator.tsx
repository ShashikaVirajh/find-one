import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { screenNames } from 'constants/screen-names.constant';
import AuthMainScreen from 'screens/auth/auth-main/auth-main.screen';
import SignInScreen from 'screens/auth/sign-in/sign-in.screen';
import ConfirmPasswordScreen from 'screens/auth/sign-up/confirm-password/confirm-password.screen';
import EmailScreen from 'screens/auth/sign-up/email/email.screen';
import MobileScreen from 'screens/auth/sign-up/mobile/mobile.screen';
import NameScreen from 'screens/auth/sign-up/name/name.screen';
import PasswordScreen from 'screens/auth/sign-up/password/password.screen';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator headerMode='none' initialRouteName={screenNames.AUTH_MAIN_SCREEN}>
      <Stack.Screen name={screenNames.AUTH_MAIN_SCREEN} component={AuthMainScreen} />
      <Stack.Screen name={screenNames.SIGN_IN_SCREEN} component={SignInScreen} />
      <Stack.Screen name={screenNames.NAME_SCREEN} component={NameScreen} />
      <Stack.Screen name={screenNames.EMAIL_SCREEN} component={EmailScreen} />
      <Stack.Screen name={screenNames.MOBILE_SCREEN} component={MobileScreen} />
      <Stack.Screen name={screenNames.PASSWORD_SCREEN} component={PasswordScreen} />
      <Stack.Screen name={screenNames.CONFIRM_PASSWORD_SCREEN} component={ConfirmPasswordScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AuthNavigator;
