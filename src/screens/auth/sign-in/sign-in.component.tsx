import React from 'react';
// import { NavigationScreenProp, NavigationState } from 'react-navigation';

import { BorderlessButton, Button, InputText, Label, Screen } from 'components/ui';
import { SIGN_IN_FORM } from 'constants/forms.constant';
import { icons } from 'constants/icons.constant';
import { routes } from 'constants/routes.constant';
import { strings } from 'constants/strings.constant';
import { KeyBoardTypes } from 'enums';

import styles from './sign-in.styles';

const SignIn = ({ email, password, navigation, signInError, signInStart }: IProps) => {
  const disableButton = () => email.trim() === '' || password.trim() === '';

  const navigateToSignUp = () => {
    navigation.replace(routes.NAME_SCREEN);
  };

  const handleLogin = () => {
    const data = { email, password };
    signInStart(data);
  };

  const renderSignInError = () => {
    if (signInError) {
      return <Label style={styles.error} type={Label.Types.ERROR} text={signInError} />;
    }

    return null;
  };

  const renderFooter = () => (
    <Button
      text={strings.LOG_IN}
      type={Button.Types.PRIMARY}
      disabled={disableButton()}
      onPress={handleLogin}
    />
  );

  return (
    <Screen
      footer={renderFooter}
      title={strings.SIGN_IN_TITLE}
      contentStyles={styles.screenContent}>
      <InputText
        name='email'
        frontIcon={icons.EMAIL}
        label={strings.EMAIL}
        form={SIGN_IN_FORM}
        maxLength={100}
        placeholder='Email'
        inputContainerStyle={styles.inputContainer}
        errorStyles={styles.inputError}
        keyboardType={KeyBoardTypes.email}
      />
      <InputText
        name='password'
        frontIcon={icons.PASSWORD}
        label={strings.PASSWORD}
        form={SIGN_IN_FORM}
        maxLength={20}
        placeholder='Password'
        inputContainerStyle={styles.inputContainer}
        errorStyles={styles.inputError}
        secureTextEntry
        keyboardType={KeyBoardTypes.default}
      />

      {renderSignInError()}

      <BorderlessButton
        buttonStyle={styles.buttonStyle}
        text={strings.SIGN_UP_HERE}
        onPress={navigateToSignUp}
      />
    </Screen>
  );
};

// type Navigation = NavigationScreenProp<NavigationState>;

interface IProps {
  email: string;
  password: string;
  signInError?: string;
  navigation?: any;
  signInStart: Function;
}

export default SignIn;
