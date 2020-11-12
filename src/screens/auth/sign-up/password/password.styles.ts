import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';
import { getScaledNumber } from 'utils/common.utils';

export default StyleSheet.create({
  buttonStyle: {
    marginTop: getScaledNumber(20),
  },
  errorText: {
    color: colors.LIGHT_RED,
  },
  hintText: {
    color: colors.FOREGROUND,
  },
  inputContainer: {
    paddingLeft: getScaledNumber(0),
  },
  inputError: {
    left: getScaledNumber(0),
  },
  screenContent: {
    paddingHorizontal: getScaledNumber(24),
    marginTop: getScaledNumber(50),
  },
});
