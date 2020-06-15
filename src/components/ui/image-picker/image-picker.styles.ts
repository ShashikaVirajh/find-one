import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';

export default StyleSheet.create({
  container: {
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: colors.LIGHT_GRAY,
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
