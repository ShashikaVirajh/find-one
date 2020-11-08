import React from 'react';

import { Button, InputText, Label, Screen } from 'components/ui';
import { SIGN_UP_FORM } from 'constants/forms.constant';
import { icons } from 'constants/icons.constant';
import { routes } from 'constants/routes.constant';
import { KeyBoardTypes, PasswordErrorTypes } from 'enums';
import { validatePassword } from 'validations';
import strings from './password.strings';
import styles from './password.styles';

const Password = ({ values, navigation }: IProps) => {
  const disableButton = () => {
    let errors: string[] = [];

    if (values !== undefined) errors = validatePassword(values.password);
    return errors.length > 0;
  };

  const renderPasswordConditions = () => {
    const { LOWERCASE, UPPERCASE, NUMBER, LENGTH, SYMBOL } = PasswordErrorTypes;

    let errors: string[] = [];

    if (values !== undefined) errors = validatePassword(values.password);

    return (
      <>
        <Label
          size={14}
          style={!errors.includes(LENGTH) ? styles.hintText : styles.errorText}
          text={strings.LENGTH_VALIDATION}
        />
        <Label
          size={14}
          style={!errors.includes(UPPERCASE) ? styles.hintText : styles.errorText}
          text={strings.UPPERCASE_VALIDATION}
        />
        <Label
          size={14}
          style={!errors.includes(LOWERCASE) ? styles.hintText : styles.errorText}
          text={strings.LOWERCASE_VALIDATION}
        />
        <Label
          size={14}
          style={!errors.includes(SYMBOL) ? styles.hintText : styles.errorText}
          text={strings.SPECIAL_CHARACTER_VALIDATION}
        />
        <Label
          size={14}
          style={!errors.includes(NUMBER) ? styles.hintText : styles.errorText}
          text={strings.NUMBER_VALIDATION}
        />
      </>
    );
  };

  const handleSignIn = () => {
    navigation.navigate(routes.CONFIRM_PASSWORD_SCREEN);
  };

  const renderFooter = () => (
    <Button
      buttonStyle={styles.buttonStyle}
      text={strings.NEXT}
      disabled={disableButton()}
      onPress={handleSignIn}
    />
  );

  return (
    <Screen footer={renderFooter} title={strings.TITLE} contentStyles={styles.screenContent}>
      <InputText
        name='password'
        frontIcon={icons.PASSWORD}
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
    </Screen>
  );
};

interface IProps {
  values: any;
  navigation: any;
}

export default Password;
