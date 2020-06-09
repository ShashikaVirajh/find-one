import React from 'react';
import { NavigationScreenProp, NavigationState } from 'react-navigation';

import { Button, InputText, Screen } from 'components/ui';
import { SIGN_UP_FORM } from 'constants/forms.constant';
import { iconNames } from 'constants/icon-names.constant';
import { screenNames } from 'constants/screen-names.constant';
import { strings } from 'constants/strings.constant';
import { KeyBoardTypes } from 'enums';
import { ValidationTypes } from 'enums';

import styles from './mobile.styles';

const Mobile = ({ mobile, errors, navigation }: IProps) => {
  const _disableButton = () => {
    if (errors?.mobile?.length > 0 || mobile.trim() === '') return true;
  };

  const _handleNext = () => {
    navigation.navigate(screenNames.PASSWORD_SCREEN);
  };
  return (
    <Screen title={strings.MOBILE_TITLE} contentStyles={styles.screenContent}>
      <InputText
        name='mobile'
        frontIcon={iconNames.MOBILE}
        label={strings.MOBILE}
        form={SIGN_UP_FORM}
        maxLength={13}
        placeholder={strings.MOBILE}
        inputContainerStyle={styles.inputContainer}
        errorStyles={styles.inputError}
        keyboardType={KeyBoardTypes.phone}
        validations={[ValidationTypes.required, ValidationTypes.mobile]}
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
  mobile: string;
  errors: any;
  navigation: Navigation;
}

export default Mobile;
