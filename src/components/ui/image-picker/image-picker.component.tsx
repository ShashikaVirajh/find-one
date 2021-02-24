import React, { useEffect } from 'react';
import { View } from 'react-native';
import RNImagePicker from 'react-native-image-picker';

import { CustomImage, Icon } from 'components/ui';
import { colors } from 'constants/colors.constant';
import { icons } from 'constants/icons.constant';
import { ResizeModes } from 'enums';
import { ImagePickerResponse } from 'types/response.types';
import { requestCameraPermission } from 'utils/android-permissions.utils';
import { getScaledNumber } from 'utils/common.utils';

import styles from './image-picker.styles';

const ImagePicker = ({
  addFormData,
  borderRadius,
  containerStyles,
  iconSize,
  initForm,
  fieldValue,
  form,
  name,
  height,
  width,
}: Props) => {
  useEffect(() => {
    initForm({ form, field: name, fieldValue: '' });
    requestPermission();
  }, []);

  const cameraOptions = {
    title: 'Set your profie picture',
    allowsEditing: true,
    quality: 0.5,
    customButtons: fieldValue ? [{ name: 'removePhoto', title: 'Remove profile picture' }] : [],
  };

  const requestPermission = async () => {
    await requestCameraPermission();
  };

  const handlePress = () => {
    selectImage();
  };

  const setImage = (response: ImagePickerResponse) => {
    addFormData({
      form,
      data: {
        values: { [name]: `data:${response.type};base64,${response.data}` },
      },
    });
  };

  const clearImage = () => {
    addFormData({
      form,
      data: {
        values: { [name]: '' },
      },
    });
  };

  const renderContent = () => {
    if (!fieldValue) {
      return (
        <Icon
          icon={icons.CAMERA}
          color={colors.BACKGROUND}
          size={iconSize}
          onPress={handlePress}
        />
      );
    }

    return (
      <CustomImage
        borderRadius={borderRadius}
        containerStyle={styles.container}
        height={height}
        imageStyle={styles.image}
        resizeMode={ResizeModes.cover}
        source={{ uri: fieldValue }}
        width={width}
        disabled={false}
        onPress={handlePress}
      />
    );
  };

  const selectImage = async () => {
    try {
      RNImagePicker.showImagePicker(cameraOptions, (response: any) => {
        if (response.didCancel) return;
        if (response.error) return;
        if (response.customButton) return clearImage();

        setImage(response);
      });
    } catch (error) {}
  };

  return (
    <View style={[styles.container, containerStyles, { borderRadius, height, width }]}>
      {renderContent()}
    </View>
  );
};

interface Props {
  addFormData: Function;
  borderRadius: number;
  containerStyles: Object;
  fieldValue: string;
  form: Object;
  height?: number | string;
  iconSize: number;
  initForm: Function;
  name: string;
  width?: number | string;
}

ImagePicker.defaultProps = {
  borderRadius: getScaledNumber(10),
  containerStyle: {},
  disabled: true,
  height: getScaledNumber(300),
  iconSize: getScaledNumber(50),
  imageStyle: {},
  onPress: () => {},
  width: '100%',
};

export default ImagePicker;
