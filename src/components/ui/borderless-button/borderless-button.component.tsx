import React from 'react';
import { TouchableOpacity } from 'react-native';

import Label from 'components/ui/label/label.component';
import styles from './borderless-button.styles';

const BorderlessButton = ({
  buttonStyle,
  disabled,
  onPress,
  size,
  text,
  textStyle,
  underline,
}: IProps) => (
  <TouchableOpacity
    style={[styles.button, buttonStyle]}
    disabled={disabled}
    onPress={() => onPress()}>
    <Label
      size={size}
      style={[disabled ? styles.disabledText : styles.text, textStyle]}
      text={text}
      underline={underline}
    />
  </TouchableOpacity>
);

export interface IProps {
  buttonStyle?: object;
  disabled?: boolean;
  onPress: Function;
  size?: number;
  text: string;
  textStyle?: object;
  underline?: boolean;
}

BorderlessButton.defaultProps = {
  disabled: false,
  onPress: () => {},
  size: 16,
  underline: false,
};

export default BorderlessButton;
