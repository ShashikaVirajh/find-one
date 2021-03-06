import React from 'react';
import { Pressable } from 'react-native';

import Label from 'components/ui/label/label.component';
import styles from './borderless-button.styles';

const BorderlessButton = ({
  testID,
  buttonStyle,
  disabled,
  onPress,
  size,
  text,
  textStyle,
  underline,
}: Props) => (
  <Pressable testID={testID} style={buttonStyle} disabled={disabled} onPress={onPress}>
    <Label
      size={size}
      style={[disabled ? styles.disabledText : styles.text, textStyle]}
      text={text}
      underline={underline}
    />
  </Pressable>
);

interface Props {
  testID?: string;
  buttonStyle?: object;
  disabled?: boolean;
  onPress: () => void;
  size?: number;
  text: string;
  textStyle?: object;
  underline?: boolean;
}

BorderlessButton.defaultProps = {
  disabled: false,
  size: 16,
  underline: false,
};

export default BorderlessButton;
