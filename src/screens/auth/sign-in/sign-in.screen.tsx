import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import SignInContainer from './sign-in.container';

type Navigation = NavigationScreenProp<NavigationState>;
interface IProps {
  navigation: Navigation;
}

const SignInScreen = ({ navigation }: IProps) => <SignInContainer navigation={navigation} />;

export default SignInScreen;
