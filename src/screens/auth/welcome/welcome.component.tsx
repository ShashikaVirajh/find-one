import React, { useEffect } from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import { Button, CustomImage, Screen } from 'components/ui';
import { SIGN_IN_FORM, SIGN_UP_FORM } from 'constants/forms.constant';
import { HomeLogo } from 'constants/images.constants';
import { routes } from 'constants/routes.constant';
import { strings } from 'constants/strings.constant';

import styles from './welcome.styles';

const Welcome = ({ initForm, navigation }: IProps) => {
  useEffect(() => {
    initForm({ form: SIGN_IN_FORM, field: 'email' });
    initForm({ form: SIGN_UP_FORM, field: 'firstName' });
  }, []);

  const _navigateToSignIn = () => {
    navigation.navigate(routes.SIGN_IN_SCREEN);
  };

  const _navigateToSignUp = () => {
    navigation.navigate(routes.NAME_SCREEN);
  };

  return (
    <Screen
      showNavigationHeader={false}
      title={strings.AUTH_MAIN_TITLE}
      description={strings.AUTH_MAIN_DESCRIPTION}
      contentStyles={styles.screenContent}
      withScrollView={false}>
      <CustomImage
        containerStyle={styles.imageContainer}
        imageStyle={styles.image}
        source={HomeLogo}
      />

      <Button
        buttonStyle={styles.signUpButton}
        text={strings.I_HAVE_AN_ACCOUNT}
        type={Button.Types.PRIMARY}
        onPress={_navigateToSignIn}
      />

      <Button
        text={strings.CREATE_NEW_ACCOUNT}
        type={Button.Types.PRIMARY}
        onPress={_navigateToSignUp}
      />
    </Screen>
  );
};

type Navigation = NavigationScreenProp<NavigationState>;

interface IProps {
  initForm: Function;
  navigation: Navigation;
}

export default Welcome;
