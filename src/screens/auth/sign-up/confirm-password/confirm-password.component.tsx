import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import { Button, InputText, Label, Screen } from 'components/ui';
import { SIGN_UP_FORM } from 'constants/forms.constant';
import { iconNames } from 'constants/icon-names.constant';
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
  const _disableButton = () => password !== confirmPassword;

  const _renderPasswordError = () => {
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

  const _handleSignUp = () => {
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

  const _renderSignUpError = () => {
    if (signUpError) {
      return <Label style={styles.error} type={Label.Types.ERROR} text={signUpError} />;
    }

    return null;
  };

  return (
    <Screen title={strings.CONFIRM_PASSWORD_TITLE} contentStyles={styles.screenContent}>
      <InputText
        name='confirmPassword'
        frontIcon={iconNames.PASSWORD}
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

      {_renderPasswordError()}
      {_renderSignUpError()}

      <Button
        text={strings.CREATE_ACCOUNT}
        type={Button.Types.PRIMARY}
        disabled={_disableButton()}
        onPress={_handleSignUp}
      />
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
