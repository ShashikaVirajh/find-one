import React from 'react';

import { Button, InputText, Screen } from 'components/ui';
import { SIGN_UP_FORM } from 'constants/forms.constant';
import { icons } from 'constants/icons.constant';
import { routes } from 'constants/routes.constant';
import { KeyBoardTypes } from 'enums';
import { ValidationTypes } from 'enums';
import strings from './email.strings';
import styles from './email.styles';

const Email = ({ email, errors, navigation }: Props) => {
  const disableButton = () => {
    if (errors?.email?.length > 0 || email.trim() === '') return true;
  };

  const handleNext = () => {
    navigation.navigate(routes.MOBILE_SCREEN);
  };

  const renderFooter = () => (
    <Button text={strings.NEXT} disabled={disableButton()} onPress={handleNext} />
  );

  return (
    <Screen footer={renderFooter} title={strings.TITLE} contentStyles={styles.screenContent}>
      <InputText
        name='email'
        frontIcon={icons.EMAIL}
        label={strings.EMAIL}
        form={SIGN_UP_FORM}
        maxLength={50}
        placeholder={strings.EMAIL}
        inputContainerStyle={styles.inputContainer}
        errorStyles={styles.inputError}
        keyboardType={KeyBoardTypes.email}
        validations={[ValidationTypes.required, ValidationTypes.email]}
      />
    </Screen>
  );
};

interface Props {
  email: string;
  errors: any;
  navigation: any;
}

export default Email;
