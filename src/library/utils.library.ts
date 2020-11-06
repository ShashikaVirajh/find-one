import { Dimensions, PixelRatio, Platform } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

class Utils {
  static getScaledNumber = (size: number = 0) => {
    /** based on iphone 11 Pro's scale */
    const scale = SCREEN_WIDTH / 375;
    const scaledSize = size * scale;
    const nearestPixel = PixelRatio.roundToNearestPixel(scaledSize);
    return Platform.OS === 'ios' ? Math.round(nearestPixel) : Math.round(nearestPixel) - 2;
  };
}

export default Utils;
