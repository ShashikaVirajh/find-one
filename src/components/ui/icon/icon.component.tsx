import React from 'react';
import { Pressable } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const Icon = ({ testID, style, icon, color, size, disabled, onPress }: Props) => (
  <Pressable
    testID={testID}
    style={style}
    disabled={disabled}
    onPress={onPress}>
    <FontAwesomeIcon icon={icon} color={color} size={size} />
  </Pressable>
);

interface Props {
  testID?: string;
  icon?: any;
  color?: string;
  size?: number;
  disabled?: boolean;
  style?: object;
  onPress?: () => void;
}

Icon.defaultProps = {
  disabled: false,
  style: {},
};

export default Icon;
