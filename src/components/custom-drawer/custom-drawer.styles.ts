import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';
import { Utils } from 'library';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  itemContainer: {
    paddingHorizontal: Utils.getScaledNumber(10),
  },
  item: {
    paddingVertical: Utils.getScaledNumber(15),
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    width: Utils.getScaledNumber(30),
    height: Utils.getScaledNumber(30),
    marginRight: Utils.getScaledNumber(15),
    resizeMode: 'contain',
  },
  imageContainer: {
    marginBottom: Utils.getScaledNumber(20),
    height: '30%',
  },
  image: {
    flex: 1,
    borderRadius: Utils.getScaledNumber(0),
  },
  header: {
    marginBottom: Utils.getScaledNumber(20),
    paddingHorizontal: Utils.getScaledNumber(10),
    color: colors.LIGHT_GREEN,
  },
});
