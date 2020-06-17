import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';

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
    borderRadius: 10,
    padding: 16,
    opacity: 0.8,
    justifyContent: 'center',
  },
});
