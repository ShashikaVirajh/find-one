import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';
import { getScaledNumber } from 'utils/common.utils';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: getScaledNumber(1),
    borderColor: colors.GRAY,
    width: '100%',
    height: getScaledNumber(50),
  },
  leftContent: {
    paddingLeft: getScaledNumber(10),
  },
  mainContent: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: getScaledNumber(20),
  },
});
