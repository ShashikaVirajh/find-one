import React from 'react';
import { Pressable } from 'react-native';

import Label from 'components/ui/label/label.component';
import { Utils } from 'library';
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
  <Pressable style={buttonStyle} disabled={disabled} onPress={() => onPress()}>
    <Label
      size={size}
      style={[disabled ? styles.disabledText : styles.text, textStyle]}
      text={text}
      underline={underline}
    />
  </Pressable>
);

interface IProps {
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
  size: Utils.getScaledNumber(16),
  underline: false,
};

export default BorderlessButton;
