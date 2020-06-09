import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import EmailContainer from './email.container';

type Navigation = NavigationScreenProp<NavigationState>;
interface IProps {
  navigation: Navigation;
}

const EmailScreen = ({ navigation }: IProps) => <EmailContainer navigation={navigation} />;

export default EmailScreen;
