import React from 'react';
import { TouchableOpacity, View } from 'react-native';

import { Icon, Label } from 'components/ui';
import { colors } from 'constants/colors.constant';
import styles from './button.styles';

const Button = ({
  backIcon,
  backIconColor,
  backIconSize,
  buttonStyle,
  disabled,
  frontIcon,
  frontIconColor,
  frontIconSize,
  onPress,
  roundButton,
  text,
  textStyle,
  ...otherProps
}: IProps) => {
  const renderFrontIcon = () => {
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

  const renderBackIcon = () => {
    if (backIcon) {
      return (
        <Icon
          icon={backIcon}
          color={backIconColor}
          size={backIconSize}
          disabled={true}
          style={styles.backIcon}
        />
      );
    }

    return null;
  };

  const renderButtonText = () => (
    <View style={styles.textContainer}>
      <Label size={16} style={[styles.text, textStyle]} text={text} />
    </View>
  );

  return (
    <TouchableOpacity
      onPress={() => onPress()}
      disabled={disabled}
      style={[
        styles.button,
        disabled ? styles.disabled : styles.default,
        roundButton ? styles.roundButton : styles.squareButton,
        buttonStyle,
      ]}
      {...otherProps}>
      {renderFrontIcon()}
      {renderButtonText()}
      {renderBackIcon()}
    </TouchableOpacity>
  );
};

export interface IProps {
  backIcon?: any;
  backIconColor?: string;
  backIconSize?: number;
  buttonStyle?: object;
  disabled?: boolean;
  frontIcon?: any;
  frontIconColor?: string;
  frontIconSize?: number;
  onPress: Function;
  roundButton: boolean;
  text: string;
  textStyle?: object;
}

Button.defaultProps = {
  backIconColor: colors.SILVER,
  backIconSize: 24,
  buttonStyle: {},
  disabled: false,
  frontIconColor: colors.SILVER,
  frontIconSize: 24,
  onPress: () => {},
  roundButton: true,
  text: '',
  textType: '',
  textStyle: {},
};

export default Button;
