import React, { useEffect, useState } from 'react';
import { Platform, View } from 'react-native';

import { CustomImage, Icon } from 'components/ui';
import { colors } from 'constants/colors.constant';
import { iconNames } from 'constants/icon-names.constant';
import RNImagePicker from 'react-native-image-picker';
import { requestCameraPermission } from 'utils/android-permissions.utils';

import styles from './image-picker.styles';

// const ImagePicker = ({ imageUri, onChangeImage }) => {
const ImagePicker = () => {
  const [img, setImg] = useState('');

  useEffect(() => {
    requestPermission();
  }, []);

  // const cameraOptions = {
  //   title: 'Set your profie picture',
  //   cameraType: 'front',
  //   mediaType: 'photo',
  //   allowsEditing: true,
  //   quality: 0.5,
  // };

  const requestPermission = async () => {
    const permission = await requestCameraPermission();
    // console.log(permission);

    if (Platform.OS === 'android' && permission !== 'granted') {
      alert('You need to enable permission to set a profile picture.');
    } else {
      // alert('SUCCESS');
    }
  };

  const _handlePress = () => {
    selectImage();
  };

  const _renderContent = () => {
    // console.log('img', img);

    if (!img) {
      return (
        <Icon icon={iconNames.CAMERA} color={colors.BACKGROUND} size={40} onPress={_handlePress} />
      );
    }

    return (
      <CustomImage
        containerStyle={styles.container}
        imageStyle={styles.image}
        source={{ uri: img }}
      />
    );
  };

  const selectImage = async () => {
    try {
      // RNImagePicker.showImagePicker((cameraOptions, response) => {
      RNImagePicker.showImagePicker((response: any) => {
        // console.log('Response = ', response);

        if (response.didCancel) {
          // console.log('User cancelled image picker');
        } else if (response.error) {
          // console.log('ImagePicker Error: ', response.error);
        } else {
          // onChangeImage(response.uri);
          setImg(response.uri);
        }
      });
    } catch (error) {
      // console.log('Error reading an image', error);
    }
  };

  // console.log('img', img);

  return (
    <View style={styles.container}>
      {/* {!img && (
        <Icon icon={iconNames.CAMERA} color={colors.BACKGROUND} size={40} onPress={_handlePress} />
      )}
      {img && (
        <CustomImage
          containerStyle={styles.container}
          imageStyle={styles.image}
          source={{ uri: img }}
        />
      )} */}
      {/* <Icon icon={iconNames.CAMERA}
      color={colors.BACKGROUND} size={40} onPress={_handlePress} />
      <CustomImage
        containerStyle={styles.container}
        imageStyle={styles.image}
        source={{ uri: img }}
      /> */}
      {_renderContent()}
    </View>
  );
};

export default ImagePicker;
