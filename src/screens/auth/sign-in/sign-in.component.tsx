import React, { useState } from 'react';
import { View } from 'react-native';

import { BorderlessButton, Button, InputText, Label, Screen } from 'components/ui';
import { SIGN_IN_FORM } from 'constants/forms.constant';
import { icons } from 'constants/icons.constant';
import { routes } from 'constants/routes.constant';
import { KeyBoardTypes } from 'enums';
import strings from './sign-in.strings';
import styles from './sign-in.styles';

const SignIn = ({ email, password, navigation, signInStart }: IProps) => {
  const [signInError, setSignInError] = useState('');

  const disableButton = () => email.trim() === '' || password.trim() === '';

  const navigateToSignUp = () => {
    navigation.replace(routes.NAME_SCREEN);
  };

  const handleLogin = () => {
    const data = { email, password };
    signInStart(
      data,
      () => {},
      (error: string) => setSignInError(error),
    );
  };

  const renderSignInError = () => {
    if (signInError) {
      return <Label size={20} style={styles.error} text={signInError} />;
    }

    return null;
  };

  const renderFooter = () => (
    <Button text={strings.LOG_IN} disabled={disableButton()} onPress={handleLogin} />
  );

  const handleTextChange = () => {
    if (signInError) setSignInError('');
  };

  return (
    <Screen footer={renderFooter} title={strings.TITLE} contentStyles={styles.screenContent}>
      {renderSignInError()}
      <InputText
        name='email'
        frontIcon={icons.EMAIL}
        label={strings.EMAIL}
        form={SIGN_IN_FORM}
        maxLength={100}
        placeholder={strings.EMAIL}
        inputContainerStyle={styles.inputContainer}
        errorStyles={styles.inputError}
        keyboardType={KeyBoardTypes.email}
        handleChange={handleTextChange}
      />
      <InputText
        name='password'
        frontIcon={icons.PASSWORD}
        label={strings.PASSWORD}
        form={SIGN_IN_FORM}
        maxLength={16}
        placeholder={strings.PASSWORD}
        inputContainerStyle={styles.inputContainer}
        errorStyles={styles.inputError}
        secureTextEntry
        keyboardType={KeyBoardTypes.default}
        handleChange={handleTextChange}
      />

      <View style={styles.message}>
        <Label size={16} text={strings.DO_NOT_HAVE_ACCOUT} />
        <BorderlessButton
          buttonStyle={styles.link}
          text={strings.SIGN_UP_HERE}
          onPress={navigateToSignUp}
          underline
        />
      </View>
    </Screen>
  );
};

interface IProps {
  email: string;
  password: string;
  navigation?: any;
  signInStart: Function;
}

export default SignIn;
