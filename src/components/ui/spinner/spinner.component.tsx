import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import { colors } from 'constants/colors.constant';
import styles from './spinner.styles';

const Spinner = () => (
  <View style={styles.overlay}>
    <View style={styles.indicator}>
      <ActivityIndicator size='large' color={colors.LIGHT_GREEN} />
    </View>
  </View>
);

export default Spinner;
