import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import { BorderlessButton, Icon, Label } from 'components/ui';
import { colors } from 'constants/colors.constant';
import { iconNames } from 'constants/icon-names.constant';
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

  const _onLayout = () => {
    if (!form) return;
    if (mounted) return;

    initForm({ form, field: name, fieldValue });
    setMounted(true);
  };

  const _handleTextChange = (text: string) => {
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

  const _handleFocus = () => {
    if (onFocus) onFocus();
    setFocus(true);
  };

  const _handleBlur = () => {
    if (onBlur) onBlur();
    setFocus(false);
  };

  const _renderPrefix = () => {
    if (prefix) {
      return <TextInput style={[styles.prefix, prefixStyle]} value={prefix} editable={false} />;
    }

    return null;
  };

  const _renderLabel = () => {
    let labelStyles: Object = styles.hideLabel;
    if (fieldValue) labelStyles = styles.activeLabel;

    if (label) return <Text style={[styles.label, labelStyles]}>{label}</Text>;
    return <Text style={[styles.label, labelStyles]} />;
  };

  const _setStyles = () => [styles.inputText, inputStyles];

  const _toggleSecuredText = () => setSecuredText(prevState => !prevState);

  const _renderError = () => {
    if (fieldErrors && fieldErrors.length > 0) {
      return (
        <View style={styles.errorLabelContainer}>
          <Label
            type={Label.Types.ERROR}
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

  const _renderShowHideButton = () => {
    if (secureTextEntry) {
      return (
        <BorderlessButton
          text={securedText ? strings.SHOW : strings.HIDE}
          onPress={_toggleSecuredText}
          textStyle={styles.showHideButton}
        />
      );
    }

    return null;
  };

  const _clearText = () => {
    const errors = validate(validations, '');

    addFormData({
      form,
      data: {
        values: { [name]: '' },
        errors: { [name]: errors || '' },
      },
    });
  };

  const _renderFrontIcon = () => {
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

  const _renderClearIcon = () => {
    if (focused && fieldValue) {
      return (
        <Icon
          icon={iconNames.CLOSE}
          color={colors.GRAY}
          size={24}
          style={styles.clearButton}
          onPress={_clearText}
        />
      );
    }
  };

  return (
    <View style={containerStyle}>
      {_renderLabel()}

      <View style={[styles.inputContainer, inputContainerStyle]}>
        {_renderFrontIcon()}
        {_renderPrefix()}

        <TextInput
          editable={editable}
          returnKeyType={returnKeyType}
          maxLength={maxLength}
          autoCorrect={autoCorrect}
          autoFocus={autoFocus}
          autoCapitalize={autoCapitalize}
          value={value || fieldValue}
          placeholderTextColor={colors.GRAY}
          keyboardType={keyboardType === KeyBoardTypes.unset ? undefined : keyboardType}
          style={_setStyles()}
          secureTextEntry={secureTextEntry ? securedText : false}
          placeholder={placeholder}
          onChangeText={_handleTextChange}
          onFocus={_handleFocus}
          onBlur={_handleBlur}
          onLayout={_onLayout}
        />

        {_renderShowHideButton()}
        {_renderClearIcon()}
      </View>

      {_renderError()}
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
