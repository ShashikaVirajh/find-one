import React from 'react';
import { Pressable } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import styles from './clickable-icon.styles';

const Icon = ({ style, icon, color, size, disabled, onPress, testID }: IProps) => (
  <Pressable
    testID={testID}
    style={[styles.button, style]}
    disabled={disabled}
    onPress={() => onPress()}>
    <FontAwesomeIcon icon={icon} color={color} size={size} />
  </Pressable>
);

interface IProps {
  testID: string;
  icon: any;
  onPress: Function;
  color?: string;
  disabled?: boolean;
  size?: number;
  style?: object;
}

Icon.defaultProps = {
  disabled: false,
};

export default Icon;
