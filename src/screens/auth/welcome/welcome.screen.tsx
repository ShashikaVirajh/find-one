import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import WelcomeContainer from './welcome.container';

type Navigation = NavigationScreenProp<NavigationState>;
interface IProps {
  navigation: Navigation;
}

const WelcomeScreen = ({ navigation }: IProps) => <WelcomeContainer navigation={navigation} />;

export default WelcomeScreen;
