import React, { useEffect } from 'react';
import { View } from 'react-native';
import RNImagePicker from 'react-native-image-picker';

import { CustomImage, Icon } from 'components/ui';
import { colors } from 'constants/colors.constant';
import { iconNames } from 'constants/icon-names.constant';
import { requestCameraPermission } from 'utils/android-permissions.utils';

import styles from './image-picker.styles';

const cameraOptions = {
  title: 'Set your profie picture',
  allowsEditing: true,
  quality: 0.5,
};

const ImagePicker = ({ addFormData, initForm, form, name, fieldValue }: IProps) => {
  useEffect(() => {
    initForm({ form, field: name, fieldValue: '' });
    requestPermission();
  }, []);

  const requestPermission = async () => {
    await requestCameraPermission();
  };

  const _handlePress = () => {
    selectImage();
  };

  const _renderContent = () => {
    if (!fieldValue) {
      return (
        <Icon icon={iconNames.CAMERA} color={colors.BACKGROUND} size={50} onPress={_handlePress} />
      );
    }

    return (
      <CustomImage
        containerStyle={styles.container}
        imageStyle={styles.image}
        source={{ uri: fieldValue }}
      />
    );
  };

  const selectImage = async () => {
    try {
      RNImagePicker.showImagePicker(cameraOptions, (response: any) => {
        if (response.didCancel) return;
        if (response.error) return;

        addFormData({
          form,
          data: {
            values: { [name]: `data:${response.type};base64,${response.data}` },
          },
        });
      });
    } catch (error) {}
  };

  return <View style={styles.container}>{_renderContent()}</View>;
};

interface IProps {
  addFormData: Function;
  initForm: Function;
  form: Object;
  name: string;
  fieldValue: string;
}

export default ImagePicker;
