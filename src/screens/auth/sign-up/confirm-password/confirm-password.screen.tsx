import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import ConfirmPasswordContainer from './confirm-password.container';

type Navigation = NavigationScreenProp<NavigationState>;
interface IProps {
  navigation: Navigation;
}

const ConfirmPasswordScreen = ({ navigation }: IProps) => (
  <ConfirmPasswordContainer navigation={navigation} />
);

export default ConfirmPasswordScreen;
