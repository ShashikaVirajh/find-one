import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';

export default StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: 'SharpSans-Book',
    color: colors.FOREGROUND,
    fontWeight: 'bold',
  },
  activeLabel: {
    top: 12,
  },
  hideLabel: {
    display: 'none',
  },
  prefix: {
    bottom: 0,
    top: 10,
    marginRight: 2,
    fontSize: 20,
    fontFamily: 'SharpSans-Book',
  },
  inputContainer: {
    flexDirection: 'row',
    paddingBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY,
  },
  inputText: {
    flex: 1,
    top: 10,
    paddingLeft: 0,
    color: colors.FOREGROUND,
    fontSize: 20,
    fontFamily: 'SharpSans-Book',
  },
  errorLabelContainer: {
    height: 30,
  },
  errorText: {
    top: 1,
  },
  showHideButton: {
    color: colors.FOREGROUND,
    marginTop: 25,
  },
  frontIcon: {
    marginTop: 22,
    paddingRight: 16,
  },
  clearButton: {
    marginTop: 22,
    paddingLeft: 10,
  },
});
