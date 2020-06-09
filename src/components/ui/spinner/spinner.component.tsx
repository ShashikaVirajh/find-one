import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import styles from './spinner.styles';

const Spinner = () => (
  <View style={styles.container}>
    <View style={styles.indicator}>
      <ActivityIndicator size='large' color='white' />
    </View>
  </View>
);

export default Spinner;
