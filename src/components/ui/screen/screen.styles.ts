import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';
import { getScaledNumber } from 'utils/common.utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  content: {
    flex: 1,
  },
  navigationHeader: {
    marginTop: getScaledNumber(20),
    marginBottom: getScaledNumber(10),
    paddingHorizontal: getScaledNumber(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightButton: {
    minHeight: getScaledNumber(40),
    minWidth: getScaledNumber(40),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  titleTopMargin: {
    marginTop: getScaledNumber(30),
  },
  titleContainer: {
    paddingHorizontal: getScaledNumber(24),
    alignSelf: 'flex-start',
    borderColor: 'red',
  },
  description: {
    marginTop: getScaledNumber(5),
    paddingHorizontal: getScaledNumber(24),
    textAlign: 'center',
  },
  footer: {
    marginBottom: getScaledNumber(20),
    paddingHorizontal: getScaledNumber(24),
  },
});
