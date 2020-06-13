import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import ProfilePicture from './profile-picture.container';

type Navigation = NavigationScreenProp<NavigationState>;
interface IProps {
  navigation: Navigation;
}

const MobileScreen = ({ navigation }: IProps) => <ProfilePicture navigation={navigation} />;

export default MobileScreen;
