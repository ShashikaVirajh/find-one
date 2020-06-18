import { StyleSheet } from 'react-native';

import { colors } from 'constants/colors.constant';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.BACKGROUND,
  },
  content: {
    flex: 1,
  },
  navigationHeader: {
    paddingVertical: 6,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightButton: {
    minHeight: 40,
    minWidth: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  titleTopMargin: {
    marginTop: 30,
  },
  titleContainer: {
    paddingHorizontal: 24,
    alignSelf: 'flex-start',
    borderColor: 'red',
  },
  description: {
    marginTop: 5,
  },
  footer: {
    marginBottom: 20,
    paddingHorizontal: 24,
  },
});
