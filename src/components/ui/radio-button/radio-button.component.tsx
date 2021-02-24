import React from 'react';
import { Pressable, View } from 'react-native';

import { Label } from 'components/ui';

import styles from './radio-button.styles';

const RadioButton = ({ text, option, checked, onPress, containerStyle, testID }: Props) => {
  return (
    <Pressable
      testID={testID}
      style={[styles.container, containerStyle]}
      onPress={() => onPress(option, checked)}>
      <View style={styles.text}>
        <Label size={16} text={text} />
      </View>

      <View style={styles.radio}>
        <View style={checked ? styles.checked : {}} />
      </View>
    </Pressable>
  );
};

interface Props {
  testID: string;
  text: string;
  option: string;
  checked: boolean;
  onPress: Function;
  containerStyle?: object;
}

RadioButton.defaultProps = {
  checked: false,
};

export default RadioButton;
