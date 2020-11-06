import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';
import { Utils } from 'library';

export default StyleSheet.create({
  label: {
    backgroundColor: colors.LIGHT_RED,
    color: colors.FOREGROUND,
    height: Utils.getScaledNumber(30),
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
