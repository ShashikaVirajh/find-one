import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import { Button, InputText, Screen } from 'components/ui';
import { SIGN_UP_FORM } from 'constants/forms.constant';
import { iconNames } from 'constants/icon-names.constant';
import { screenNames } from 'constants/screen-names.constant';
import { strings } from 'constants/strings.constant';
import { KeyBoardTypes } from 'enums';
import { ValidationTypes } from 'enums';

import styles from './email.styles';

const Email = ({ email, errors, navigation }: IProps) => {
  const _disableButton = () => {
    if (errors?.email?.length > 0 || email.trim() === '') return true;
  };

  const _handleNext = () => {
    navigation.navigate(screenNames.MOBILE_SCREEN);
  };

  return (
    <Screen title={strings.EMAIL_TITLE} contentStyles={styles.screenContent}>
      <InputText
        name='email'
        frontIcon={iconNames.EMAIL}
        label={strings.EMAIL}
        form={SIGN_UP_FORM}
        maxLength={50}
        placeholder={strings.EMAIL}
        inputContainerStyle={styles.inputContainer}
        errorStyles={styles.inputError}
        keyboardType={KeyBoardTypes.email}
        validations={[ValidationTypes.required, ValidationTypes.email]}
      />

      <Button
        text={strings.NEXT}
        type={Button.Types.PRIMARY}
        disabled={_disableButton()}
        onPress={_handleNext}
      />
    </Screen>
  );
};

type Navigation = NavigationScreenProp<NavigationState>;

interface IProps {
  email: string;
  initForm: Function;
  errors: any;
  navigation: Navigation;
}

export default Email;
