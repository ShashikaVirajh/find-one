import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';
import { getScaledNumber } from 'utils/common.utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: getScaledNumber(24),
    alignItems: 'center',
    height: getScaledNumber(50),
    width: '100%',
  },
  text: {
    width: '90%',
  },
  radio: {
    width: getScaledNumber(20),
    height: getScaledNumber(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: getScaledNumber(50),
    borderWidth: getScaledNumber(2),
    borderColor: colors.LIGHT_GREEN,
  },
  checked: {
    borderRadius: getScaledNumber(50),
    width: getScaledNumber(10),
    height: getScaledNumber(10),
    backgroundColor: colors.LIGHT_GREEN,
  },
});
