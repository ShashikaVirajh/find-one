import Clipboard from '@react-native-community/clipboard';
import { Dimensions, PixelRatio, Platform } from 'react-native';
import Share from 'react-native-share';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export const getScaledNumber = (size: number = 0) => {
  /** based on iphone 11 Pro's scale */
  const scale = SCREEN_WIDTH / 375;
  const scaledSize = size * scale;
  const nearestPixel = PixelRatio.roundToNearestPixel(scaledSize);
  return Platform.OS === 'ios' ? Math.round(nearestPixel) : Math.round(nearestPixel) - 2;
};

export const shareContent = (options: Object, success?: Function, failed?: Function) => {
  Share.open(options).then(success).catch(failed);
};

export const copyContent = (text: string, handleCopy: Function) => {
  Clipboard.setString(text);
  handleCopy();
};

export const fixToDecimals = (value: number, decimals: number) => {
  return Number(value).toFixed(decimals);
};

export const isNum = (value: string) => /^\d*\.?\d+$/.test(value);

export const hexToRgba = (hex: string, opacity: number) => {
  const hashlessHex = hex.replace('#', '');
  const r = parseInt(hashlessHex.substring(0, 2), 16);
  const g = parseInt(hashlessHex.substring(2, 4), 16);
  const b = parseInt(hashlessHex.substring(4, 6), 16);

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

export const stringHasSpecialChar = (string: string) => {
  const specialCharRegex = /^[\sa-zA-Z]+$/g;

  return !specialCharRegex.test(string);
};

export const hasWordsInString = (string: string, words) => {
  let wordsFound = false;

  for (let i = 0; i < words.length; i++) {
    if (string.indexOf(words[i]) === -1) {
      wordsFound = false;
      break;
    } else {
      wordsFound = true;
    }
  }

  return wordsFound;
};

export const capitalizeString = (value: string) => {
  if (!value || typeof value !== 'string') return '';

  return value.toUpperCase();
};

export const capitalizeFirstLetter = (value: string) => {
  if (!value || typeof value !== 'string') return '';
  return value?.charAt(0)?.toUpperCase() + value?.slice(1);
};

export const trim = (str: any) => (str ? `${str}`.trim() : '');

export const setTextAvatar = (text: string) => {
  if (text) return text.substring(0, 1);
  return '';
};

export const formatToKilo = (num: number, isCurrency?: boolean) => {
  if (!num) return;

  if (Math.abs(num) < 999) return Math.sign(num) * Math.abs(num);

  const formattedNumber = Math.sign(num) * (Math.abs(num) / 1000);
  return isCurrency ? `S$${formattedNumber}K` : `${formattedNumber}K`;
};

export const formatToPercentage = (num: number) => {
  if (num < 0 || num > 1) return;

  const formattedNumber = (num * 100).toFixed(1);
  return `${formattedNumber}%`;
};
