import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import HomeContainer from './home.container';

type Navigation = NavigationScreenProp<NavigationState>;
interface IProps {
  navigation: Navigation;
}

const HomeScreen = ({ navigation }: IProps) => <HomeContainer navigation={navigation} />;

export default HomeScreen;
