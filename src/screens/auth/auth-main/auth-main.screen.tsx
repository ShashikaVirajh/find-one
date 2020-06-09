import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import AuthMainContainer from './auth-main.container';

type Navigation = NavigationScreenProp<NavigationState>;
interface IProps {
  navigation: Navigation;
}

const AuthMainScreen = ({ navigation }: IProps) => <AuthMainContainer navigation={navigation} />;

export default AuthMainScreen;
