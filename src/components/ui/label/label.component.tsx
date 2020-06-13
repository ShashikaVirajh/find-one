import React, { Component } from 'react';
import { Text } from 'react-native';

import styles from './label.styles';

class Label extends Component<IProps> {
  static defaultProps: IProps;

  static Types = {
    DISPLAY: 'display',
    BODY_SMALL: 'bodySmall',
    LARGE: 'large',
    MEDIUM: 'medium',
    HINT: 'hint',
    ERROR: 'error',
    SMALL: 'small',
    TINY: 'tiny',
  };

  setStyles = () => {
    const { type } = this.props;

    if (type === Label.Types.DISPLAY) return styles.display;
    if (type === Label.Types.BODY_SMALL) return styles.bodySmall;
    if (type === Label.Types.LARGE) return styles.large;
    if (type === Label.Types.MEDIUM) return styles.medium;
    if (type === Label.Types.HINT) return styles.hint;
    if (type === Label.Types.ERROR) return styles.error;
    if (type === Label.Types.SMALL) return styles.small;
    if (type === Label.Types.TINY) return styles.tiny;
  };

  render() {
    const { text, style, underline } = this.props;

    return (
      <Text
        style={[this.setStyles(), { textDecorationLine: underline ? 'underline' : 'none' }, style]}>
        {text}
      </Text>
    );
  }
}

Label.defaultProps = {
  text: '',
  type: '',
  style: {},
  underline: false,
};

export interface IProps {
  type?: string;
  text?: string;
  style?: object;
  underline?: boolean;
}

export default Label;
