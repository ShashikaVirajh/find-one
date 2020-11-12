import React from 'react';
import { Text } from 'react-native';

import { colors } from 'constants/colors.constant';
import { getScaledNumber } from 'utils/common.utils';

const Label = ({ color, size, style, text, underline }: IProps) => {
  return (
    <Text
      style={[
        { color },
        { fontSize: getScaledNumber(size) },
        { textDecorationLine: underline ? 'underline' : 'none' },
        style,
      ]}>
      {text}
    </Text>
  );
};

Label.defaultProps = {
  color: colors.FOREGROUND,
  size: getScaledNumber(16),
  text: '',
  underline: false,
};

interface IProps {
  color: string;
  size?: number;
  style?: object;
  text?: string;
  underline?: boolean;
}

export default Label;
