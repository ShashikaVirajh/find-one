import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';
import { Utils } from 'library';

export default StyleSheet.create({
  backIcon: {
    justifyContent: 'center',
    paddingHorizontal: Utils.getScaledNumber(40),
  },
  button: {
    flexDirection: 'row',
    borderWidth: Utils.getScaledNumber(1),
    height: Utils.getScaledNumber(48),
    width: '100%',
    marginTop: Utils.getScaledNumber(5),
    marginBottom: Utils.getScaledNumber(5),
  },
  buttonText: {
    flex: 1,
    justifyContent: 'center',
  },
  default: {
    backgroundColor: colors.LIGHT_GREEN,
    borderColor: colors.LIGHT_GREEN,
  },
  disabled: {
    backgroundColor: colors.DARK_GRAY,
    borderColor: colors.DARK_GRAY,
  },
  frontIcon: {
    justifyContent: 'center',
    paddingHorizontal: Utils.getScaledNumber(16),
  },
  roundButton: {
    borderRadius: Utils.getScaledNumber(25),
  },
  squareButton: {
    borderRadius: Utils.getScaledNumber(4),
  },
  text: {
    textAlign: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
