// tslint:disable: max-line-length

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { routes } from 'constants/routes.constant';

import SignInScreen from 'screens/auth/sign-in/sign-in.container';
import ConfirmPasswordScreen from 'screens/auth/sign-up/confirm-password/confirm-password.container';
import EmailScreen from 'screens/auth/sign-up/email/email.container';
import MobileScreen from 'screens/auth/sign-up/mobile/mobile.container';
import NameScreen from 'screens/auth/sign-up/name/name.container';
import PasswordScreen from 'screens/auth/sign-up/password/password.container';
import ProfilePictureScreen from 'screens/auth/sign-up/profile-picture/profile-picture.container';
import WelcomeScreen from 'screens/auth/welcome/welcome.container';

const AuthStack = createStackNavigator();

const AuthNavigator = () => (
  <NavigationContainer>
    <AuthStack.Navigator headerMode='none' initialRouteName={routes.WELCOME_SCREEN}>
      <AuthStack.Screen name={routes.WELCOME_SCREEN} component={WelcomeScreen} />
      <AuthStack.Screen name={routes.SIGN_IN_SCREEN} component={SignInScreen} />
      <AuthStack.Screen name={routes.NAME_SCREEN} component={NameScreen} />
      <AuthStack.Screen name={routes.EMAIL_SCREEN} component={EmailScreen} />
      <AuthStack.Screen name={routes.MOBILE_SCREEN} component={MobileScreen} />
      <AuthStack.Screen name={routes.PASSWORD_SCREEN} component={PasswordScreen} />
      <AuthStack.Screen name={routes.CONFIRM_PASSWORD_SCREEN} component={ConfirmPasswordScreen} />
      <AuthStack.Screen name={routes.PROFILE_PICTURE_SCREEN} component={ProfilePictureScreen} />
    </AuthStack.Navigator>
  </NavigationContainer>
);

export default AuthNavigator;
