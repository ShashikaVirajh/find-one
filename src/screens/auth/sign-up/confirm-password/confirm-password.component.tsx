import React, { useState } from 'react';

import { Button, InputText, Label, Screen } from 'components/ui';
import { SIGN_IN_FORM, SIGN_UP_FORM } from 'constants/forms.constant';
import { icons } from 'constants/icons.constant';
import { KeyBoardTypes, ValidationTypes } from 'enums';
import strings from './confirm-password.strings';
import styles from './confirm-password.styles';

const ConfirmPassword = ({
  fetchAuthUserStart,
  firstName,
  lastName,
  email,
  mobile,
  password,
  confirmPassword,
  resetForm,
  signUpStart,
}: IProps) => {
  const [signInError, setSignInError] = useState('');

  const disableButton = () => password !== confirmPassword;

  const renderPasswordError = () => {
    if (confirmPassword && password !== confirmPassword) {
      return <Label size={14} style={styles.errorText} text={strings.PASSWORD_MISMATCH_ERRROR} />;
    }

    return null;
  };

  const handleSignUp = () => {
    const data = {
      firstName,
      lastName,
      email,
      mobile,
      password,
      confirmPassword,
    };

    signUpStart(
      data,
      () =>
        fetchAuthUserStart(
          () => {
            resetForm(SIGN_IN_FORM);
            resetForm(SIGN_UP_FORM);
          },
          (error: string) => setSignInError(error),
        ),
      (error: string) => setSignInError(error),
    );
  };

  const renderSignUpError = () => {
    if (signInError) {
      return <Label size={20} style={styles.error} text={signInError} />;
    }

    return null;
  };

  const renderFooter = () => (
    <Button text={strings.CREATE_ACCOUNT} disabled={disableButton()} onPress={handleSignUp} />
  );

  const handleTextChange = () => {
    if (signInError) setSignInError('');
  };

  return (
    <Screen footer={renderFooter} title={strings.TITLE} contentStyles={styles.screenContent}>
      <InputText
        name='confirmPassword'
        frontIcon={icons.PASSWORD}
        label={strings.CONFIRM_PASSWORD}
        form={SIGN_UP_FORM}
        maxLength={20}
        secureTextEntry
        placeholder={strings.CONFIRM_PASSWORD}
        inputContainerStyle={styles.inputContainer}
        errorStyles={styles.inputError}
        keyboardType={KeyBoardTypes.default}
        handleChange={handleTextChange}
        validations={[ValidationTypes.required]}
      />

      {renderPasswordError()}
      {renderSignUpError()}
    </Screen>
  );
};

interface IProps {
  confirmPassword: string;
  email: string;
  fetchAuthUserStart: Function;
  firstName: string;
  lastName: string;
  mobile: string;
  navigation: any;
  password: string;
  resetForm: Function;
  signUpError?: string;
  signUpStart: Function;
}

export default ConfirmPassword;
