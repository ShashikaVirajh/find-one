import React from 'react';
import { TouchableOpacity } from 'react-native';

import Label from 'components/ui/label/label.component';
import styles from './borderless-button.styles';

const BorderlessButton = ({
  text,
  buttonStyle,
  textType,
  textStyle,
  underline,
  disabled,
  onPress,
}: IProps) => (
  <TouchableOpacity
    style={[styles.button, buttonStyle]}
    disabled={disabled}
    onPress={() => onPress()}>
    <Label
      type={textType}
      text={text}
      underline={underline}
      style={[disabled ? styles.disabledText : styles.text, textStyle]}
    />
  </TouchableOpacity>
);

export interface IProps {
  text: string;
  disabled?: boolean;
  underline?: boolean;
  textType?: string;
  buttonStyle?: object;
  textStyle?: object;
  onPress: Function;
}

BorderlessButton.defaultProps = {
  text: '',
  underline: false,
  disabled: false,
  textType: Label.Types.BUTTON_LABEL,
  buttonStyle: {},
  textStyle: {},
  onPress: () => {},
};

export default BorderlessButton;
