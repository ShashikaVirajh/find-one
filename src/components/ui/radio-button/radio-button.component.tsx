import React from 'react';
import { Pressable, View } from 'react-native';

import { Label } from 'components/ui';

import styles from './radio-button.styles';

const RadioButton = ({ text, option, checked, onPress, containerStyle }: IProps) => {
  return (
    <Pressable style={[styles.container, containerStyle]} onPress={() => onPress(option, checked)}>
      <View style={styles.text}>
        <Label size={16} text={text} />
      </View>

      <View style={styles.radio}>
        <View style={checked ? styles.checked : {}} />
      </View>
    </Pressable>
  );
};

interface IProps {
  text: string;
  option: string;
  checked: boolean;
  onPress: Function;
  containerStyle?: object;
}

RadioButton.defaultProps = {
  checked: false,
  onPress: () => {},
};

export default RadioButton;
