import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    borderWidth: 1,
    height: 48,
    width: '100%',
    marginTop: 5,
    marginBottom: 5,
  },
  primaryButtonDefault: {
    backgroundColor: colors.LIGHT_GREEN,
    borderColor: colors.LIGHT_GREEN,
  },
  primaryButtonPressed: {
    backgroundColor: colors.LIGHT_GREEN,
    borderColor: colors.LIGHT_GREEN,
  },
  primaryButtonDisabled: {
    backgroundColor: colors.DARK_GRAY,
    borderColor: colors.DARK_GRAY,
  },
  secondaryButtonDefault: {
    borderColor: colors.RED,
  },
  secondaryButtonPressed: {
    borderColor: colors.RED,
  },
  secondaryButtonDisabled: {
    borderColor: colors.GRAY,
  },
  text: {
    textAlign: 'center',
  },
  primaryText: {
    color: colors.WHITE,
  },
  secondaryTextDefault: {
    color: colors.RED,
  },
  secondaryTextPressed: {
    color: colors.RED,
  },
  secondaryTextDisabled: {
    color: colors.GRAY,
  },
  buttonText: {
    flex: 1,
    justifyContent: 'center',
  },
  frontIcon: {
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  backIcon: {
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  roundButton: {
    borderRadius: 25,
  },
  squareButton: {
    borderRadius: 4,
  },
});
