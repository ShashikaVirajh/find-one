import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';
import { Utils } from 'library';

export default StyleSheet.create({
  screenContent: {
    paddingHorizontal: Utils.getScaledNumber(24),
    marginTop: Utils.getScaledNumber(50),
  },
  inputContainer: {
    paddingLeft: Utils.getScaledNumber(0),
  },
  inputError: {
    left: Utils.getScaledNumber(0),
  },
  message: {
    flexDirection: 'row',
    marginTop: Utils.getScaledNumber(20),
  },
  link: {
    marginLeft: Utils.getScaledNumber(5),
  },
  error: {
    marginBottom: Utils.getScaledNumber(20),
    color: colors.LIGHT_RED,
  },
});
