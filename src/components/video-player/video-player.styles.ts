import { StyleSheet } from 'react-native';

import { Utils } from 'library';

export default StyleSheet.create({
  videoPlayer: {
    top: Utils.getScaledNumber(0),
    left: Utils.getScaledNumber(0),
    bottom: Utils.getScaledNumber(0),
    right: Utils.getScaledNumber(0),
    height: Utils.getScaledNumber(300),
  },
});
