import React from 'react';
import { Pressable, View } from 'react-native';

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
  const renderFrontIcon = () =>
    frontIcon ? (
      <Icon
        testID='frontIcon'
        icon={frontIcon}
        color={frontIconColor}
        size={frontIconSize}
        disabled={true}
        style={styles.frontIcon}
      />
    ) : null;

  const renderBackIcon = () =>
    backIcon ? (
      <Icon
        testID='backIcon'
        icon={backIcon}
        color={backIconColor}
        size={backIconSize}
        disabled={true}
        style={styles.backIcon}
      />
    ) : null;

  const renderButtonText = () => (
    <View style={styles.textContainer}>
      <Label size={16} style={[styles.text, textStyle]} text={text} />
    </View>
  );

  return (
    <Pressable
      onPress={onPress}
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
    </Pressable>
  );
};

interface IProps {
  backIcon?: JSX.Element;
  backIconColor?: string;
  backIconSize?: number;
  buttonStyle?: object;
  disabled?: boolean;
  frontIcon?: JSX.Element;
  frontIconColor?: string;
  frontIconSize?: number;
  onPress: () => void;
  roundButton: boolean;
  text: string;
  textStyle?: object;
}

Button.defaultProps = {
  backIconColor: colors.SILVER,
  backIconSize: 24,
  frontIconColor: colors.SILVER,
  frontIconSize: 24,
  roundButton: true,
};

export default Button;
