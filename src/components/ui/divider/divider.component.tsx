import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from 'constants/colors.constant';

const Divider = ({ backgroundColor, height, width }: Props) => (
  <View testID='divider' style={{ backgroundColor, height, width }} />
);

interface Props {
  backgroundColor?: string;
  height?: number | string;
  width?: number | string;
}

Divider.defaultProps = {
  backgroundColor: colors.GRAY,
  height: StyleSheet.hairlineWidth,
  width: '100%',
};

export default Divider;
