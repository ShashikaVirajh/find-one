import React from 'react';
import { View } from 'react-native';

import { BorderlessButton, Button, InputText, Label, Screen } from 'components/ui';
import { SIGN_UP_FORM } from 'constants/forms.constant';
import { icons } from 'constants/icons.constant';
import { routes } from 'constants/routes.constant';
import { ValidationTypes } from 'enums';
import strings from './name.strings';
import styles from './name.styles';

const Name = ({ firstName, lastName, errors, navigation }: IProps) => {
  const disableButton = () => {
    if (errors?.firstName?.length > 0 || firstName.trim() === '') return true;
    if (errors.lastName?.length > 0 || lastName.trim() === '') return true;
  };

  const navigateToSignIn = () => {
    navigation.replace(routes.SIGN_IN_SCREEN);
  };

  const handleName = () => {
    navigation.navigate(routes.EMAIL_SCREEN);
  };

  const renderFooter = () => (
    <Button text={strings.NEXT} disabled={disableButton()} onPress={handleName} />
  );

  return (
    <Screen footer={renderFooter} title={strings.TITLE} contentStyles={styles.screenContent}>
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

      <View style={styles.message}>
        <Label size={16} text={strings.ALREADY_HAVE_AN_ACCOUNT} />
        <BorderlessButton
          buttonStyle={styles.link}
          text={strings.SIGN_IN_HERE}
          onPress={navigateToSignIn}
          underline
        />
      </View>
    </Screen>
  );
};

interface IProps {
  firstName: string;
  lastName: string;
  errors: any;
  navigation: any;
}

export default Name;
