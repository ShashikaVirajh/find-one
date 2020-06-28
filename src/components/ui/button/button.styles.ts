import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';

export default StyleSheet.create({
  backIcon: {
    justifyContent: 'center',
    paddingHorizontal: 40,
  },
  button: {
    flexDirection: 'row',
    borderWidth: 1,
    height: 48,
    width: '100%',
    marginTop: 5,
    marginBottom: 5,
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
    paddingHorizontal: 16,
  },
  roundButton: {
    borderRadius: 25,
  },
  squareButton: {
    borderRadius: 4,
  },
  text: {
    textAlign: 'center',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
