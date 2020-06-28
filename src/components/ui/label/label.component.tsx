import React from 'react';
import { Text } from 'react-native';

import { colors } from 'constants/colors.constant';

const Label = ({ color, size, style, text, underline }: IProps) => {
  return (
    <Text
      style={[
        { color },
        { fontSize: size },
        { textDecorationLine: underline ? 'underline' : 'none' },
        style,
      ]}>
      {text}
    </Text>
  );
};

Label.defaultProps = {
  color: colors.FOREGROUND,
  size: 12,
  style: {},
  text: '',
  underline: false,
};

export interface IProps {
  color: string;
  size?: number;
  style?: object;
  text?: string;
  underline?: boolean;
}

export default Label;
