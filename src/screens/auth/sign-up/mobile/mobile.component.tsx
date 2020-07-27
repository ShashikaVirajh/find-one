import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import { Button, InputText, Screen } from 'components/ui';
import { SIGN_UP_FORM } from 'constants/forms.constant';
import { icons } from 'constants/icons.constant';
import { routes } from 'constants/routes.constant';
import { KeyBoardTypes } from 'enums';
import { ValidationTypes } from 'enums';
import strings from './mobile.strings';
import styles from './mobile.styles';

const Mobile = ({ mobile, errors, navigation }: IProps) => {
  const disableButton = () => {
    if (errors?.mobile?.length > 0 || mobile.trim() === '') return true;
  };

  const handleNext = () => {
    navigation.navigate(routes.PROFILE_PICTURE_SCREEN);
  };

  const renderFooter = () => (
    <Button text={strings.NEXT} disabled={disableButton()} onPress={handleNext} />
  );

  return (
    <Screen footer={renderFooter} title={strings.TITLE} contentStyles={styles.screenContent}>
      <InputText
        name='mobile'
        frontIcon={icons.MOBILE}
        label={strings.MOBILE}
        form={SIGN_UP_FORM}
        maxLength={13}
        placeholder={strings.MOBILE}
        inputContainerStyle={styles.inputContainer}
        errorStyles={styles.inputError}
        keyboardType={KeyBoardTypes.phone}
        validations={[ValidationTypes.required, ValidationTypes.mobile]}
      />
    </Screen>
  );
};

type Navigation = NavigationScreenProp<NavigationState>;

interface IProps {
  mobile: string;
  errors: any;
  navigation: Navigation;
}

export default Mobile;
