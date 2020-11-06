import React from 'react';
import { Image, Pressable } from 'react-native';

import { ResizeModes } from 'enums';
import { Utils } from 'library';

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
  <Pressable
    style={[{ height, width }, containerStyle]}
    disabled={disabled}
    onPress={() => onPress()}>
    <Image
      style={[{ height, width, borderRadius }, imageStyle]}
      source={source}
      resizeMode={resizeMode}
    />
  </Pressable>
);

interface IProps {
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
  height: Utils.getScaledNumber(300),
  width: '100%',
  borderRadius: Utils.getScaledNumber(6),
  containerStyle: {},
  imageStyle: {},
  onPress: () => {},
};

export default Icon;
