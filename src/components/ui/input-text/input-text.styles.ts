import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';
import { getScaledNumber } from 'utils/common.utils';

export default StyleSheet.create({
  label: {
    fontSize: getScaledNumber(14),
    fontFamily: 'SharpSans-Book',
    color: colors.FOREGROUND,
    fontWeight: 'bold',
  },
  activeLabel: {
    top: getScaledNumber(12),
  },
  hideLabel: {
    display: 'none',
  },
  prefix: {
    bottom: getScaledNumber(0),
    top: getScaledNumber(10),
    marginRight: getScaledNumber(2),
    fontSize: getScaledNumber(20),
    fontFamily: 'SharpSans-Book',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingBottom: getScaledNumber(4),
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY,
  },
  inputText: {
    flex: 1,
    top: getScaledNumber(10),
    paddingLeft: getScaledNumber(0),
    color: colors.FOREGROUND,
    fontSize: getScaledNumber(20),
    fontFamily: 'SharpSans-Book',
  },
  errorLabelContainer: {
    marginTop: getScaledNumber(2),
    height: getScaledNumber(30),
  },
  errorText: {
    top: getScaledNumber(1),
  },
  showHideButton: {
    color: colors.FOREGROUND,
    marginTop: getScaledNumber(25),
  },
  frontIcon: {
    marginTop: getScaledNumber(22),
    paddingRight: getScaledNumber(16),
  },
  clearButton: {
    marginTop: getScaledNumber(22),
    paddingLeft: getScaledNumber(10),
  },
});
