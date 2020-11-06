import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';
import { Utils } from 'library';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: Utils.getScaledNumber(24),
    alignItems: 'center',
    height: Utils.getScaledNumber(50),
    width: '100%',
  },
  text: {
    width: '90%',
  },
  radio: {
    width: Utils.getScaledNumber(20),
    height: Utils.getScaledNumber(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Utils.getScaledNumber(50),
    borderWidth: Utils.getScaledNumber(2),
    borderColor: colors.LIGHT_GREEN,
  },
  checked: {
    borderRadius: Utils.getScaledNumber(50),
    width: Utils.getScaledNumber(10),
    height: Utils.getScaledNumber(10),
    backgroundColor: colors.LIGHT_GREEN,
  },
});
