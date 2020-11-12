import { StyleSheet } from 'react-native';

import { getScaledNumber } from 'utils/common.utils';

export default StyleSheet.create({
  videoPlayer: {
    top: getScaledNumber(0),
    left: getScaledNumber(0),
    bottom: getScaledNumber(0),
    right: getScaledNumber(0),
    height: getScaledNumber(300),
  },
});
