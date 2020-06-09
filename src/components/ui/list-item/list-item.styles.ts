import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.GRAY,
    width: '100%',
    height: 50,
  },
  leftContent: {
    paddingLeft: 10,
  },
  mainContent: {
    flex: 1,
    flexDirection: 'column',
    paddingLeft: 20,
  },
});
