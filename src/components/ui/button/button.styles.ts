import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';
import { getScaledNumber } from 'utils/common.utils';

export default StyleSheet.create({
  backIcon: {
    justifyContent: 'center',
    paddingHorizontal: getScaledNumber(40),
  },
  button: {
    flexDirection: 'row',
    borderWidth: getScaledNumber(1),
    height: getScaledNumber(48),
    width: '100%',
    marginTop: getScaledNumber(5),
    marginBottom: getScaledNumber(5),
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
    paddingHorizontal: getScaledNumber(16),
  },
  roundButton: {
    borderRadius: getScaledNumber(25),
  },
  squareButton: {
    borderRadius: getScaledNumber(4),
  },
  text: {
    textAlign: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
