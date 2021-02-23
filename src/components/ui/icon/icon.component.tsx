import React from 'react';
import { Pressable } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import styles from './icon.styles';

const Icon = ({ testID, style, icon, color, size, disabled, onPress }: IProps) => (
  <Pressable
    testID={testID}
    style={[styles.button, style]}
    disabled={disabled}
    onPress={() => onPress()}>
    <FontAwesomeIcon icon={icon} color={color} size={size} />
  </Pressable>
);

interface IProps {
  testID?: string;
  icon?: any;
  color?: string;
  size?: number;
  disabled?: boolean;
  style?: object;
  onPress: Function;
}

Icon.defaultProps = {
  disabled: false,
  style: {},
  onPress: () => {},
};

export default Icon;
