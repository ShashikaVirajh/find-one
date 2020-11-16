import mockRNCNetInfo from '@react-native-community/netinfo/jest/netinfo-mock.js';

jest.mock('@react-native-community/netinfo', () => mockRNCNetInfo);

jest.mock('react-native-share', () => ({
  default: jest.fn(),
}));

jest.mock('react-native-image-picker', () => ({}));
