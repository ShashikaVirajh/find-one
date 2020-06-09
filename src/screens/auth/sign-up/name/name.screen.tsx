import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import NameContainer from './name.container';

type Navigation = NavigationScreenProp<NavigationState>;
interface IProps {
  navigation: Navigation;
}

const NameScreen = ({ navigation }: IProps) => <NameContainer navigation={navigation} />;

export default NameScreen;
