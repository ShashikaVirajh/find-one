import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';

export default StyleSheet.create({
  screenContent: {
    paddingHorizontal: 24,
    marginTop: 50,
  },
  inputContainer: {
    paddingLeft: 0,
  },
  inputError: {
    left: 0,
  },
  message: {
    flexDirection: 'row',
    marginTop: 20,
  },
  link: {
    marginLeft: 5,
  },
  error: {
    marginBottom: 20,
    color: colors.LIGHT_RED,
  },
});
