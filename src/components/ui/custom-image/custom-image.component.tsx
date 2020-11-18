import React from 'react';
import { Image, Pressable } from 'react-native';

import { ResizeModes } from 'enums';
import { getScaledNumber } from 'utils/common.utils';

const CustomIage = ({
  testID,
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
    testID={testID}
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
  testID: string;
  height?: number | string;
  width?: number | string;
  borderRadius: number;
  source: any;
  resizeMode?: ResizeModes;
  disabled?: boolean;
  containerStyle?: object;
  imageStyle?: object;
  onPress: Function;
}

CustomIage.defaultProps = {
  disabled: true,
  resizeMode: ResizeModes.cover,
  height: getScaledNumber(300),
  width: '100%',
  borderRadius: getScaledNumber(6),
};

export default CustomIage;
