import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';
import { Utils } from 'library';

export default StyleSheet.create({
  label: {
    fontSize: Utils.getScaledNumber(14),
    fontFamily: 'SharpSans-Book',
    color: colors.FOREGROUND,
    fontWeight: 'bold',
  },
  activeLabel: {
    top: Utils.getScaledNumber(12),
  },
  hideLabel: {
    display: 'none',
  },
  prefix: {
    bottom: Utils.getScaledNumber(0),
    top: Utils.getScaledNumber(10),
    marginRight: Utils.getScaledNumber(2),
    fontSize: Utils.getScaledNumber(20),
    fontFamily: 'SharpSans-Book',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingBottom: Utils.getScaledNumber(4),
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY,
  },
  inputText: {
    flex: 1,
    top: Utils.getScaledNumber(10),
    paddingLeft: Utils.getScaledNumber(0),
    color: colors.FOREGROUND,
    fontSize: Utils.getScaledNumber(20),
    fontFamily: 'SharpSans-Book',
  },
  errorLabelContainer: {
    marginTop: Utils.getScaledNumber(2),
    height: Utils.getScaledNumber(30),
  },
  errorText: {
    top: Utils.getScaledNumber(1),
  },
  showHideButton: {
    color: colors.FOREGROUND,
    marginTop: Utils.getScaledNumber(25),
  },
  frontIcon: {
    marginTop: Utils.getScaledNumber(22),
    paddingRight: Utils.getScaledNumber(16),
  },
  clearButton: {
    marginTop: Utils.getScaledNumber(22),
    paddingLeft: Utils.getScaledNumber(10),
  },
});
