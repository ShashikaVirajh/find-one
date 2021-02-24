import React from 'react';
import { View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import LottieView from 'lottie-react-native';

import { Button, CustomImage, Screen } from 'components/ui';
import { HomeLogo } from 'constants/images.constants';
import { routes } from 'constants/routes.constant';
import strings from './landing.strings';
import styles from './landing.styles';

const Landing = ({ appDescription, navigation }: Props) => {
  const navigateToSignIn = () => navigation.navigate(routes.SIGN_IN_SCREEN);

  const navigateToSignUp = () => navigation.navigate(routes.NAME_SCREEN);

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
      description={appDescription}
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

interface Props {
  appDescription: string;
  navigation: any;
}

export default Landing;
