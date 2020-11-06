import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';
import { Utils } from 'library';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: Utils.getScaledNumber(1),
    borderColor: colors.GRAY,
    width: '100%',
    height: Utils.getScaledNumber(50),
  },
  leftContent: {
    paddingLeft: Utils.getScaledNumber(10),
  },
  mainContent: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: Utils.getScaledNumber(20),
  },
});
