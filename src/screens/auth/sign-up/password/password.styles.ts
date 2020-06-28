import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';

export default StyleSheet.create({
  buttonStyle: {
    marginTop: 20,
  },
  errorText: {
    color: colors.RED,
  },
  hintText: {
    color: colors.FOREGROUND,
  },
  inputContainer: {
    paddingLeft: 0,
  },
  inputError: {
    left: 0,
  },
  screenContent: {
    paddingHorizontal: 24,
    marginTop: 50,
  },
});
