import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import { Button, InputText, Label, Screen } from 'components/ui';
import { SIGN_UP_FORM } from 'constants/forms.constant';
import { iconNames } from 'constants/icon-names.constant';
import { screenNames } from 'constants/screen-names.constant';
import { strings } from 'constants/strings.constant';
import { KeyBoardTypes, PasswordErrorTypes } from 'enums';
import { validatePassword } from 'validations';

import styles from './password.styles';

const Password = ({ values, navigation }: IProps) => {
  const _disableButton = () => {
    let errors: string[] = [];

    if (values !== undefined) errors = validatePassword(values.password);
    return errors.length > 0;
  };

  const renderPasswordConditions = () => {
    const { LOWERCASE, UPPERCASE, NUMBER, LENGTH, SYMBOL } = PasswordErrorTypes;
    const { ERROR, HINT } = Label.Types;

    let errors: string[] = [];

    if (values !== undefined) errors = validatePassword(values.password);

    return (
      <>
        <Label type={!errors.includes(LENGTH) ? HINT : ERROR} text='Use 8 - 20 characters' />
        <Label
          type={!errors.includes(UPPERCASE) ? HINT : ERROR}
          text='Use at least 1 upper case letter'
        />
        <Label
          type={!errors.includes(LOWERCASE) ? HINT : ERROR}
          text='Use at least 1 lower case letter'
        />
        <Label
          type={!errors.includes(SYMBOL) ? HINT : ERROR}
          text='Use at least 1 special character (!@#$%^&*)'
        />
        <Label type={!errors.includes(NUMBER) ? HINT : ERROR} text='Use at least 1 number' />
      </>
    );
  };

  const _handleSignIn = () => {
    navigation.navigate(screenNames.CONFIRM_PASSWORD_SCREEN);
  };

  return (
    <Screen title={strings.PASSWORD_TITLE} contentStyles={styles.screenContent}>
      <InputText
        name='password'
        frontIcon={iconNames.PASSWORD}
        label={strings.PASSWORD}
        form={SIGN_UP_FORM}
        maxLength={20}
        secureTextEntry
        placeholder={strings.PASSWORD}
        inputContainerStyle={styles.inputContainer}
        errorStyles={styles.inputError}
        keyboardType={KeyBoardTypes.default}
      />

      {renderPasswordConditions()}

      <Button
        buttonStyle={styles.buttonStyle}
        text={strings.NEXT}
        type={Button.Types.PRIMARY}
        disabled={_disableButton()}
        onPress={_handleSignIn}
      />
    </Screen>
  );
};

type Navigation = NavigationScreenProp<NavigationState>;

interface IProps {
  values: any;
  navigation: Navigation;
}

export default Password;
