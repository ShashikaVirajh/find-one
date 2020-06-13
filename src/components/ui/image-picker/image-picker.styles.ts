import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.LIGHT_GRAY,
    borderRadius: 15,
    height: 200,
    justifyContent: 'center',
    marginVertical: 10,
    overflow: 'hidden',
    width: 200,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
