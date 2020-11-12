import { StyleSheet } from 'react-native';

import { getScaledNumber } from 'utils/common.utils';

export default StyleSheet.create({
  screenContent: {
    paddingHorizontal: getScaledNumber(24),
    marginTop: getScaledNumber(50),
  },
  inputContainer: {
    paddingLeft: getScaledNumber(0),
  },
  inputError: {
    left: getScaledNumber(0),
  },
  buttonStyle: {
    marginTop: getScaledNumber(20),
  },
});
