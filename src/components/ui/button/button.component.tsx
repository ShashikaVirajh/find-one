import React, { Component } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon, Label } from 'components/ui';
import { colors } from 'constants/colors.constant';
import styles from './button.styles';

class Button extends Component<IProps> {
  static defaultProps: IProps;

  static Types = {
    PRIMARY: 'PRIMARY',
    SECONDARY: 'SECONDARY',
  };

  state = {
    pressed: false,
  };

  handlePressIn = () => this.setState({ pressed: true });

  handlePressOut = () => this.setState({ pressed: false });

  buttonStyles = () => {
    const { pressed } = this.state;
    const { type, disabled } = this.props;

    if (type === Button.Types.PRIMARY) {
      if (disabled) return styles.primaryButtonDisabled;
      if (!pressed) return styles.primaryButtonDefault;
      if (pressed) return styles.primaryButtonPressed;
    }

    if (type === Button.Types.SECONDARY) {
      if (disabled) return styles.secondaryButtonDisabled;
      if (!pressed) return styles.secondaryButtonDefault;
      if (pressed) return styles.secondaryButtonPressed;
    }
  };

  textStyles = () => {
    const { pressed } = this.state;
    const { type, disabled } = this.props;

    if (type === Button.Types.PRIMARY) return styles.primaryText;

    if (type === Button.Types.SECONDARY) {
      if (disabled) return styles.secondaryTextDisabled;
      if (!pressed) return styles.secondaryTextDefault;
      if (pressed) return styles.secondaryTextPressed;
    }
  };

  renderFrontIcon = () => {
    const { frontIcon, frontIconColor, frontIconSize } = this.props;

    if (frontIcon) {
      return (
        <Icon
          icon={frontIcon}
          color={frontIconColor}
          size={frontIconSize}
          disabled={true}
          style={styles.frontIcon}
        />
      );
    }

    return null;
  };

  renderBackIcon = () => {
    const { frontIcon } = this.props;

    if (frontIcon) {
      return <View style={styles.backIcon} />;
    }

    return null;
  };

  renderButtonText = () => {
    const { text, textType, textStyle } = this.props;

    return (
      <View style={styles.buttonText}>
        <Label style={[styles.text, this.textStyles(), textStyle]} type={textType} text={text} />
      </View>
    );
  };

  render() {
    const { disabled, roundButton, buttonStyle, onPress } = this.props;

    return (
      <TouchableOpacity
        onPress={() => onPress()}
        activeOpacity={1}
        onPressIn={this.handlePressIn}
        onPressOut={this.handlePressOut}
        disabled={disabled}
        style={[
          styles.button,
          this.buttonStyles(),
          roundButton ? styles.roundButton : styles.squareButton,
          buttonStyle,
        ]}>
        {this.renderFrontIcon()}
        {this.renderButtonText()}
        {this.renderBackIcon()}
      </TouchableOpacity>
    );
  }
}

export interface IProps {
  disabled?: boolean;
  text: string;
  textType: string;
  type?: string;
  frontIcon?: any;
  frontIconColor?: string;
  frontIconSize?: number;
  roundButton: boolean;
  backIcon?: any;
  backIconColor?: string;
  backIconSize?: number;
  buttonStyle?: object;
  textStyle?: object;
  onPress: Function;
}

Button.defaultProps = {
  disabled: false,
  text: '',
  textType: '',
  type: Button.Types.PRIMARY,
  roundButton: true,
  frontIconColor: colors.SILVER,
  frontIconSize: 24,
  backIconColor: colors.SILVER,
  backIconSize: 24,
  buttonStyle: {},
  textStyle: {},
  onPress: () => {},
};

export default Button;
