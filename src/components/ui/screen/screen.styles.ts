import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';
import { Utils } from 'library';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  content: {
    flex: 1,
  },
  navigationHeader: {
    marginTop: Utils.getScaledNumber(20),
    marginBottom: Utils.getScaledNumber(10),
    paddingHorizontal: Utils.getScaledNumber(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightButton: {
    minHeight: Utils.getScaledNumber(40),
    minWidth: Utils.getScaledNumber(40),
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  titleTopMargin: {
    marginTop: Utils.getScaledNumber(30),
  },
  titleContainer: {
    paddingHorizontal: Utils.getScaledNumber(24),
    alignSelf: 'flex-start',
    borderColor: 'red',
  },
  description: {
    marginTop: Utils.getScaledNumber(5),
    paddingHorizontal: Utils.getScaledNumber(24),
    textAlign: 'center',
  },
  footer: {
    marginBottom: Utils.getScaledNumber(20),
    paddingHorizontal: Utils.getScaledNumber(24),
  },
});
