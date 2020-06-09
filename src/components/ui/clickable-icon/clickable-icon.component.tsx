import React from 'react';
import { TouchableOpacity } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import styles from './clickable-icon.styles';

const Icon = ({ style, icon, color, size, disabled, onPress }: IProps) => (
  <TouchableOpacity style={[styles.button, style]} disabled={disabled} onPress={() => onPress()}>
    <FontAwesomeIcon icon={icon} color={color} size={size} />
  </TouchableOpacity>
);

export interface IProps {
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
