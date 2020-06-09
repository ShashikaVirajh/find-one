import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import PasswordContainer from './password.container';

type Navigation = NavigationScreenProp<NavigationState>;
interface IProps {
  navigation: Navigation;
}

const PasswordScreen = ({ navigation }: IProps) => <PasswordContainer navigation={navigation} />;

export default PasswordScreen;
