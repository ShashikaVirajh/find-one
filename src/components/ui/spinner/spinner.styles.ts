import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';
import { Utils } from 'library';

export default StyleSheet.create({
  overlay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    ...StyleSheet.absoluteFillObject,
  },
  indicator: {
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    borderRadius: Utils.getScaledNumber(10),
    padding: Utils.getScaledNumber(16),
    opacity: 0.8,
    justifyContent: 'center',
  },
});
