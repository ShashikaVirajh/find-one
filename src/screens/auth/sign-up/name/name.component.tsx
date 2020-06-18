import React from 'react';
// import { NavigationScreenProp, NavigationState } from 'react-navigation';

import { BorderlessButton, Button, InputText, Screen } from 'components/ui';
import { SIGN_UP_FORM } from 'constants/forms.constant';
import { icons } from 'constants/icons.constant';
import { routes } from 'constants/routes.constant';
import { strings } from 'constants/strings.constant';
import { ValidationTypes } from 'enums';

import styles from './name.styles';

const Name = ({ firstName, lastName, errors, navigation }: IProps) => {
  const _disableButton = () => {
    if (errors?.firstName?.length > 0 || firstName.trim() === '') return true;
    if (errors.lastName?.length > 0 || lastName.trim() === '') return true;
  };

  const _navigateToSignIn = () => {
    navigation.replace(routes.SIGN_IN_SCREEN);
  };

  const _handleName = () => {
    navigation.navigate(routes.EMAIL_SCREEN);
  };

  const renderFooter = () => (
    <Button
      text={strings.NEXT}
      type={Button.Types.PRIMARY}
      disabled={_disableButton()}
      onPress={_handleName}
    />
  );

  return (
    <Screen footer={renderFooter} title={strings.NAME_TITLE} contentStyles={styles.screenContent}>
      <InputText
        name='firstName'
        frontIcon={icons.NAME}
        label={strings.FIRST_NAME}
        form={SIGN_UP_FORM}
        maxLength={25}
        placeholder={strings.FIRST_NAME}
        inputContainerStyle={styles.inputContainer}
        errorStyles={styles.inputError}
        validations={[ValidationTypes.required, ValidationTypes.name]}
      />
      <InputText
        name='lastName'
        frontIcon={icons.NAME}
        label={strings.LAST_NAME}
        form={SIGN_UP_FORM}
        maxLength={25}
        placeholder={strings.LAST_NAME}
        inputContainerStyle={styles.inputContainer}
        errorStyles={styles.inputError}
        validations={[ValidationTypes.required, ValidationTypes.name]}
      />

      <BorderlessButton
        buttonStyle={styles.buttonStyle}
        text={strings.SIGN_IN_HERE}
        onPress={_navigateToSignIn}
      />
    </Screen>
  );
};

// type Navigation = NavigationScreenProp<NavigationState>;

interface IProps {
  firstName: string;
  lastName: string;
  errors: any;
  navigation: any;
}

export default Name;
