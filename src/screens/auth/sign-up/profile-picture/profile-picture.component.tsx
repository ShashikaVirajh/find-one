import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import { Button, ImagePicker, Screen } from 'components/ui';
// import { SIGN_UP_FORM } from 'constants/forms.constant';
import { screenNames } from 'constants/screen-names.constant';
import { strings } from 'constants/strings.constant';
import { requestCameraPermission } from 'utils/android-permissions.utils';

import styles from './profile-picture.styles';

const ProfilePicture = ({ uri, navigation }: IProps) => {
  useEffect(() => {
    setCameraPermission();
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

  const _handleNext = () => {
    navigation.navigate(screenNames.PASSWORD_SCREEN);
  };

  return (
    <Screen title={strings.PROFILE_PICTURE_TITLE} contentStyles={styles.screenContent}>
      <ImagePicker name='photo' form='SIGN_UP' />

      <Button
        text={strings.NEXT}
        type={Button.Types.PRIMARY}
        // disabled={_disableButton()}
        onPress={_handleNext}
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
