import { PermissionsAndroid } from 'react-native';

export const requestStoragePermission = async () => {
  try {
    const response = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    );

    return response;
  } catch (error) {
    return error;
  }
};

export const requestContactPermission = async () => {
  try {
    const response = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS);

    return response;
  } catch (error) {
    return error;
  }
};

export const requestCameraPermission = async () => {
  try {
    const response = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.CAMERA);

    return response;
  } catch (error) {
    return error;
  }
};
