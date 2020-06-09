import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 24,
    alignItems: 'center',
    height: 50,
    width: '100%',
  },
  text: {
    width: '90%',
  },
  radio: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: colors.LIGHT_GREEN,
  },
  checked: {
    borderRadius: 50,
    width: 10,
    height: 10,
    backgroundColor: colors.LIGHT_GREEN,
  },
});
