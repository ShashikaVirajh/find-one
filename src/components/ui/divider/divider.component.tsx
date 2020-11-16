import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from 'constants/colors.constant';

const Divider = ({ backgroundColor, height, width }: IProps) => (
  <View testID='divider' style={{ backgroundColor, height, width }} />
);

Divider.defaultProps = {
  backgroundColor: colors.GRAY,
  height: StyleSheet.hairlineWidth,
  width: '100%',
};

interface IProps {
  backgroundColor?: string;
  height?: number | string;
  width?: number | string;
}

export default Divider;
