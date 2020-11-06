import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';
import { Utils } from 'library';

export default StyleSheet.create({
  buttonStyle: {
    marginTop: Utils.getScaledNumber(20),
  },
  errorText: {
    color: colors.LIGHT_RED,
  },
  hintText: {
    color: colors.FOREGROUND,
  },
  inputContainer: {
    paddingLeft: Utils.getScaledNumber(0),
  },
  inputError: {
    left: Utils.getScaledNumber(0),
  },
  screenContent: {
    paddingHorizontal: Utils.getScaledNumber(24),
    marginTop: Utils.getScaledNumber(50),
  },
});
