import { StyleSheet } from 'react-native';

import { getScaledNumber } from 'library/utils.library';

export default StyleSheet.create({
  answer: {
    marginVertical: getScaledNumber(18),
  },
  container: {
    minHeight: getScaledNumber(56),
    marginTop: getScaledNumber(10),
    marginBottom: getScaledNumber(25),
  },
  icon: {
    marginLeft: getScaledNumber(24),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getScaledNumber(15),
    alignItems: 'center',
  },
  question: {
    maxWidth: '85%',
  },
});
