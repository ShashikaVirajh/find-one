import React, { useEffect } from 'react';
import { View } from 'react-native';

import LottieView from 'lottie-react-native';

import { Button, CustomImage, Screen } from 'components/ui';
import { SIGN_IN_FORM, SIGN_UP_FORM } from 'constants/forms.constant';
import { HomeLogo } from 'constants/images.constants';
import { routes } from 'constants/routes.constant';
import strings from './welcome.strings';
import styles from './welcome.styles';

const Welcome = ({ initForm, navigation }: IProps) => {
  useEffect(() => {
    initForm({ form: SIGN_IN_FORM, field: 'email' });
    initForm({ form: SIGN_UP_FORM, field: 'firstName' });
  }, []);

  const navigateToSignIn = () => {
    navigation.navigate(routes.SIGN_IN_SCREEN);
  };

  const navigateToSignUp = () => {
    navigation.navigate(routes.NAME_SCREEN);
  };

  const renderFooter = () => (
    <>
      <Button
        buttonStyle={styles.signUpButton}
        text={strings.I_HAVE_AN_ACCOUNT}
        onPress={navigateToSignIn}
      />
      <Button text={strings.CREATE_NEW_ACCOUNT} onPress={navigateToSignUp} />
    </>
  );

  return (
    <Screen
      footer={renderFooter}
      hideBackButton
      title={strings.TITLE}
      description={strings.DESCRIPTION}
      contentStyles={styles.screenContent}>
      <View style={styles.body}>
        <CustomImage
          containerStyle={styles.imageContainer}
          imageStyle={styles.image}
          source={HomeLogo}
        />

        <LottieView
          source={require('assets/animations/locator.json')}
          autoPlay
          loop
          resizeMode='cover'
          style={styles.anime}
        />
      </View>
    </Screen>
  );
};

interface IProps {
  initForm: Function;
  navigation: any;
}

export default Welcome;
