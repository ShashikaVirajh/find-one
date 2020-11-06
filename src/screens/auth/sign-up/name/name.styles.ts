import { StyleSheet } from 'react-native';

import { Utils } from 'library';

export default StyleSheet.create({
  screenContent: {
    paddingHorizontal: Utils.getScaledNumber(24),
    marginTop: Utils.getScaledNumber(50),
  },
  inputContainer: {
    paddingLeft: Utils.getScaledNumber(0),
  },
  message: {
    flexDirection: 'row',
    marginTop: Utils.getScaledNumber(20),
  },
  link: {
    marginLeft: Utils.getScaledNumber(5),
  },
  inputError: {
    left: Utils.getScaledNumber(0),
  },
  buttonStyle: {
    marginTop: Utils.getScaledNumber(20),
  },
});
