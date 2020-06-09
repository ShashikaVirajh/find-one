import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import MobileContainer from './mobile.container';

type Navigation = NavigationScreenProp<NavigationState>;
interface IProps {
  navigation: Navigation;
}

const MobileScreen = ({ navigation }: IProps) => <MobileContainer navigation={navigation} />;

export default MobileScreen;
