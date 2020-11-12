import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';
import { getScaledNumber } from 'utils/common.utils';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  itemContainer: {
    paddingHorizontal: getScaledNumber(10),
  },
  item: {
    paddingVertical: getScaledNumber(15),
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: getScaledNumber(30),
    height: getScaledNumber(30),
    marginRight: getScaledNumber(15),
    resizeMode: 'contain',
  },
  imageContainer: {
    marginBottom: getScaledNumber(20),
    height: '30%',
  },
  image: {
    flex: 1,
    borderRadius: getScaledNumber(0),
  },
  header: {
    marginBottom: getScaledNumber(20),
    paddingHorizontal: getScaledNumber(10),
    color: colors.LIGHT_GREEN,
  },
});
