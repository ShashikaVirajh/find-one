import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';
import { getScaledNumber } from 'utils/common.utils';

export default StyleSheet.create({
  buttonStyle: {
    marginTop: getScaledNumber(20),
  },
  errorText: {
    marginTop: getScaledNumber(-20),
    color: colors.LIGHT_RED,
  },
  inputContainer: {
    paddingLeft: getScaledNumber(0),
  },
  inputError: {
    left: getScaledNumber(0),
  },
  passwordConditions: {
    marginTop: getScaledNumber(30),
  },
  screenContent: {
    paddingHorizontal: 24,
    marginTop: getScaledNumber(50),
  },
  error: {
    marginBottom: getScaledNumber(20),
    color: colors.LIGHT_RED,
  },
});
