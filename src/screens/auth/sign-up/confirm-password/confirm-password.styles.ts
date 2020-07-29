import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';

export default StyleSheet.create({
  buttonStyle: {
    marginTop: 20,
  },
  errorText: {
    marginTop: -20,
    color: colors.LIGHT_RED,
  },
  inputContainer: {
    paddingLeft: 0,
  },
  inputError: {
    left: 0,
  },
  passwordConditions: {
    marginTop: 30,
  },
  screenContent: {
    paddingHorizontal: 24,
    marginTop: 50,
  },
});
