import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { BorderlessButton, Icon, Label } from 'components/ui';
import { colors } from 'constants/colors.constant';
import { icons } from 'constants/icons.constant';
import { strings } from 'constants/strings.constant';
import { AutoCapitalizeTypes, KeyBoardTypes, ReturnKeyTypes } from 'enums';
import { validate } from 'validations';

import styles from './input-text.styles';

const InputText = ({
  initForm,
  form,
  name,
  value,
  fieldValue,
  addFormData,
  fieldErrors,
  handleChange,
  prefixStyle,
  prefix,
  secureTextEntry,
  frontIcon,
  frontIconColor,
  frontIconSize,
  label,
  editable,
  placeholder,
  maxLength,
  autoCorrect,
  autoFocus,
  validations,
  autoCapitalize,
  returnKeyType,
  keyboardType,
  errorStyles,
  inputStyles,
  containerStyle,
  inputContainerStyle,
  onFocus,
  onBlur,
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
    let labelStyles: Object = styles.hideLabel;
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
            color={colors.RED}
            size={12}
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
          text={securedText ? strings.SHOW : strings.HIDE}
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
          editable={editable}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
          autoCorrect={autoCorrect}
          autoFocus={autoFocus}
          autoCapitalize={autoCapitalize}
          value={value || fieldValue}
          placeholderTextColor={colors.SILVER}
          keyboardType={keyboardType === KeyBoardTypes.unset ? undefined : keyboardType}
          style={setStyles()}
          secureTextEntry={secureTextEntry ? securedText : false}
          placeholder={placeholder}
          onChangeText={handleTextChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onLayout={onLayout}
        />

        {renderShowHideButton()}
        {renderClearIcon()}
      </View>

      {renderError()}
    </View>
  );
};

interface IProps {
  label?: string;
  editable?: boolean;
  maxLength?: number;
  autoCorrect?: boolean;
  autoFocus?: boolean;
  placeholder?: string;
  value?: string;
  initForm: Function;
  form: Object;
  name: string;
  addFormData: Function;
  fieldValue?: string;
  fieldErrors: string[];
  placeholderTextColor?: string;
  prefix?: string;
  frontIcon?: any;
  frontIconColor?: string;
  frontIconSize?: number;
  clearButton: boolean;
  autoCapitalize?: AutoCapitalizeTypes;
  returnKeyType?: ReturnKeyTypes;
  keyboardType?: KeyBoardTypes;
  secureTextEntry?: boolean;
  inputStyles?: object;
  containerStyle?: object;
  inputContainerStyle?: object;
  errorStyles?: object;
  validations?: string[];
  handleChange: Function;
  onFocus?: Function;
  onBlur?: Function;
  prefixStyle: object;
}

InputText.defaultProps = {
  editable: true,
  maxLength: 30,
  autoCorrect: false,
  placeholder: '',
  value: '',
  form: {},
  name: '',
  fieldValue: '',
  fieldErrors: [],
  autoCapitalize: AutoCapitalizeTypes.none,
  returnKeyType: ReturnKeyTypes.done,
  keyboardType: KeyBoardTypes.default,
  secureTextEntry: false,
  placeholderTextColor: colors.DARK_GRAY,
  label: '',
  frontIconColor: colors.GRAY,
  frontIconSize: 24,
  inputStyles: {},
  containerStyle: {},
  inputContainerStyle: {},
  clearButton: true,
  errorStyles: {},
  validations: [],
  initForm: () => {},
  addFormData: () => {},
  handleChange: () => {},
  prefixStyle: {},
};

export default InputText;
