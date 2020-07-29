import React, { useState } from 'react';
import { StyleProp, Text, TextInput, View, ViewStyle } from 'react-native';

import { BorderlessButton, Icon, Label } from 'components/ui';
import { colors } from 'constants/colors.constant';
import { icons } from 'constants/icons.constant';
import { validate } from 'validations';

import styles from './input-text.styles';

const InputText = ({
  addFormData,
  containerStyle,
  errorStyles,
  fieldErrors,
  fieldValue,
  form,
  frontIcon,
  frontIconColor,
  frontIconSize,
  handleChange,
  inputContainerStyle,
  initForm,
  inputStyles,
  label,
  name,
  onFocus,
  onBlur,
  prefixStyle,
  prefix,
  secureTextEntry,
  validations,
  value,
  ...otherProps
}: IProps) => {
  const [focused, setFocus] = useState(false);
  const [securedText, setSecuredText] = useState(true);
  const [mounted, setMounted] = useState(false);

  const onLayout = () => {
    if (!form) return;
    if (mounted) return;

    initForm({ form, field: name, fieldValue });
    setMounted(true);
  };

  const handleTextChange = (text: string) => {
    const errors = validate(validations, text);

    if (handleChange) handleChange(text);

    addFormData({
      form,
      data: {
        values: { [name]: text },
        errors: { [name]: errors },
      },
    });
  };

  const handleFocus = () => {
    if (onFocus) onFocus();
    setFocus(true);
  };

  const handleBlur = () => {
    if (onBlur) onBlur();
    setFocus(false);
  };

  const renderPrefix = () => {
    if (prefix) {
      return <TextInput style={[styles.prefix, prefixStyle]} value={prefix} editable={false} />;
    }

    return null;
  };

  const renderLabel = () => {
    let labelStyles: StyleProp<ViewStyle> = styles.hideLabel;
    if (fieldValue) labelStyles = styles.activeLabel;

    if (label) return <Text style={[styles.label, labelStyles]}>{label}</Text>;
    return <Text style={[styles.label, labelStyles]} />;
  };

  const setStyles = () => [styles.inputText, inputStyles];

  const toggleSecuredText = () => setSecuredText(prevState => !prevState);

  const renderError = () => {
    if (fieldErrors && fieldErrors.length > 0) {
      return (
        <View style={styles.errorLabelContainer}>
          <Label
            color={colors.LIGHT_RED}
            size={16}
            text={fieldErrors[0]}
            style={[styles.errorText, errorStyles]}
          />
        </View>
      );
    }

    return (
      <View style={styles.errorLabelContainer}>
        <Label />
      </View>
    );
  };

  const renderShowHideButton = () => {
    if (secureTextEntry) {
      return (
        <BorderlessButton
          text={securedText ? 'Show' : 'Hide'}
          onPress={toggleSecuredText}
          textStyle={styles.showHideButton}
        />
      );
    }

    return null;
  };

  const clearText = () => {
    const errors = validate(validations, '');

    addFormData({
      form,
      data: {
        values: { [name]: '' },
        errors: { [name]: errors || '' },
      },
    });
  };

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

  const renderClearIcon = () => {
    if (focused && fieldValue) {
      return (
        <Icon
          icon={icons.CLOSE}
          color={colors.GRAY}
          size={24}
          style={styles.clearButton}
          onPress={clearText}
        />
      );
    }

    return null;
  };

  return (
    <View style={containerStyle}>
      {renderLabel()}

      <View style={[styles.inputContainer, inputContainerStyle]}>
        {renderFrontIcon()}
        {renderPrefix()}

        <TextInput
          value={value || fieldValue}
          style={setStyles()}
          secureTextEntry={secureTextEntry ? securedText : false}
          onChangeText={handleTextChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onLayout={onLayout}
          {...otherProps}
        />

        {renderShowHideButton()}
        {renderClearIcon()}
      </View>

      {renderError()}
    </View>
  );
};

interface IProps {
  addFormData: Function;
  containerStyle?: StyleProp<ViewStyle>;
  errorStyles?: object;
  fieldErrors: string[];
  fieldValue?: string;
  form: Object;
  frontIcon?: any;
  frontIconColor?: string;
  frontIconSize?: number;
  handleChange: Function;
  inputContainerStyle?: StyleProp<ViewStyle>;
  initForm: Function;
  inputStyles?: object;
  label?: string;
  name: string;
  onFocus?: Function;
  onBlur?: Function;
  prefixStyle: object;
  prefix?: string;
  secureTextEntry?: boolean;
  validations?: string[];
  value?: string;
}

InputText.defaultProps = {
  frontIconColor: colors.GRAY,
  frontIconSize: 24,
  placeholderTextColor: colors.LIGHT_SILVER,
  validations: [],
};

export default InputText;
