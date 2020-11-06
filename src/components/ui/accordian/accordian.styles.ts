import { StyleSheet } from 'react-native';

import { Utils } from 'library';

export default StyleSheet.create({
  answer: {
    marginVertical: Utils.getScaledNumber(18),
  },
  container: {
    minHeight: Utils.getScaledNumber(56),
    marginTop: Utils.getScaledNumber(10),
    marginBottom: Utils.getScaledNumber(25),
  },
  icon: {
    marginLeft: Utils.getScaledNumber(24),
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Utils.getScaledNumber(15),
    alignItems: 'center',
  },
  question: {
    maxWidth: '85%',
  },
});
