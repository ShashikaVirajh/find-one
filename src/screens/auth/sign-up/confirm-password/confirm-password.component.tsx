import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import { Button, InputText, Label, Screen } from 'components/ui';
import { SIGN_UP_FORM } from 'constants/forms.constant';
import { icons } from 'constants/icons.constant';
import { strings } from 'constants/strings.constant';
import { KeyBoardTypes, ValidationTypes } from 'enums';

import styles from './confirm-password.styles';

const ConfirmPassword = ({
  firstName,
  lastName,
  email,
  mobile,
  password,
  confirmPassword,
  signUpError,
  signUpStart,
}: IProps) => {
  const disableButton = () => password !== confirmPassword;

  const renderPasswordError = () => {
    if (confirmPassword && password !== confirmPassword) {
      return (
        <Label
          style={styles.error}
          type={Label.Types.ERROR}
          text={strings.PASSWORD_MISMATCH_ERRROR}
        />
      );
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

    signUpStart(data);
  };

  const renderSignUpError = () => {
    if (signUpError) {
      return <Label style={styles.error} type={Label.Types.ERROR} text={signUpError} />;
    }

    return null;
  };

  const renderFooter = () => (
    <Button
      text={strings.CREATE_ACCOUNT}
      type={Button.Types.PRIMARY}
      disabled={disableButton()}
      onPress={handleSignUp}
    />
  );

  return (
    <Screen
      footer={renderFooter}
      title={strings.CONFIRM_PASSWORD_TITLE}
      contentStyles={styles.screenContent}>
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
        validations={[ValidationTypes.required]}
      />

      {renderPasswordError()}
      {renderSignUpError()}
    </Screen>
  );
};

type Navigation = NavigationScreenProp<NavigationState>;

interface IProps {
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  password: string;
  confirmPassword: string;
  signUpError?: string;
  navigation: Navigation;
  resetForm: Function;
  signUpStart: Function;
}

export default ConfirmPassword;
