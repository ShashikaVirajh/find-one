import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';
import { getScaledNumber } from 'utils/common.utils';

export default StyleSheet.create({
  label: {
    backgroundColor: colors.LIGHT_RED,
    color: colors.FOREGROUND,
    height: getScaledNumber(30),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
