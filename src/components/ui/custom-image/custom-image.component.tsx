import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { ResizeModes } from 'enums';

const Icon = ({
  containerStyle,
  imageStyle,
  height,
  width,
  borderRadius,
  resizeMode,
  source,
  disabled,
  onPress,
}: IProps) => (
  <TouchableOpacity
    style={[{ height, width }, containerStyle]}
    disabled={disabled}
    onPress={() => onPress()}>
    <Image
      style={[{ height, width, borderRadius }, imageStyle]}
      source={source}
      resizeMode={resizeMode}
    />
  </TouchableOpacity>
);

export interface IProps {
  icon?: any;
  color?: string;
  height?: number | string;
  width?: number | string;
  borderRadius: number;
  size?: number;
  source: any;
  resizeMode?: ResizeModes;
  disabled?: boolean;
  containerStyle?: object;
  imageStyle?: object;
  onPress: Function;
}

Icon.defaultProps = {
  disabled: true,
  resizeMode: ResizeModes.cover,
  height: 300,
  width: '100%',
  borderRadius: 6,
  containerStyle: {},
  imageStyle: {},
  onPress: () => {},
};

export default Icon;
