import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import { Button, ImagePicker, Screen } from 'components/ui';
import { SIGN_UP_FORM } from 'constants/forms.constant';
import { routes } from 'constants/routes.constant';
import { strings } from 'constants/strings.constant';
import {
  requestCameraPermission,
  requestLocationPermission,
} from 'utils/android-permissions.utils';

import styles from './profile-picture.styles';

const ProfilePicture = ({ uri, navigation }: IProps) => {
  useEffect(() => {
    setCameraPermission();
    setLocationPermission();
  }, []);

  const setCameraPermission = async () => {
    const persmission = await requestCameraPermission();

    if (Platform.OS === 'android') {
      if (persmission === 'granted') {
      } else {
        alert('Permission denied...');
      }
    }
  };

  const setLocationPermission = async () => {
    const persmission = await requestLocationPermission();

    if (Platform.OS === 'android') {
      if (persmission === 'granted') {
      } else {
        alert('Permission denied...');
      }
    }
  };

  const handleNext = () => {
    navigation.navigate(routes.PASSWORD_SCREEN);
  };

  const renderFooter = () => <Button text={strings.NEXT} onPress={handleNext} />;

  return (
    <Screen
      footer={renderFooter}
      title={strings.PROFILE_PICTURE_TITLE}
      contentStyles={styles.screenContent}>
      <ImagePicker
        containerStyles={{ marginBottom: 30 }}
        name='photo'
        form={SIGN_UP_FORM}
        iconSize={80}
      />
    </Screen>
  );
};

type Navigation = NavigationScreenProp<NavigationState>;

interface IProps {
  uri: any;
  navigation: Navigation;
}

export default ProfilePicture;
