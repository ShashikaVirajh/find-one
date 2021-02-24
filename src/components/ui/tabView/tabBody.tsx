import React from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from 'constants/colors.constant';

const TabBody = ({ children }: Props) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.LIGHT_GRAY,
  },
});

interface Props {
  children?: JSX.Element;
}

export default TabBody;
