import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';
import { Utils } from 'library';

export default StyleSheet.create({
  buttonStyle: {
    marginTop: Utils.getScaledNumber(20),
  },
  errorText: {
    marginTop: Utils.getScaledNumber(-20),
    color: colors.LIGHT_RED,
  },
  inputContainer: {
    paddingLeft: Utils.getScaledNumber(0),
  },
  inputError: {
    left: Utils.getScaledNumber(0),
  },
  passwordConditions: {
    marginTop: Utils.getScaledNumber(30),
  },
  screenContent: {
    paddingHorizontal: 24,
    marginTop: Utils.getScaledNumber(50),
  },
  error: {
    marginBottom: Utils.getScaledNumber(20),
    color: colors.LIGHT_RED,
  },
});
