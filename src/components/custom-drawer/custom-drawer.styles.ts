import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  itemContainer: {
    paddingHorizontal: 10,
  },
  item: {
    paddingVertical: 15,
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 15,
    resizeMode: 'contain',
  },
  imageContainer: {
    marginBottom: 20,
    height: '30%',
  },
  image: {
    flex: 1,
    borderRadius: 0,
  },
  header: {
    marginBottom: 20,
    paddingHorizontal: 10,
    color: colors.LIGHT_GREEN,
  },
});
