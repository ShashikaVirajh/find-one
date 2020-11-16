import React from 'react';

import { useNetInfo } from '@react-native-community/netinfo';

import { Label } from 'components/ui';
import strings from './offline-notice.strings';
import styles from './offline-notice.styles';

const OfflineNotice = ({ style, text }: IProps) => {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
    return <Label size={18} style={[styles.label, style]} text={text} />;
  }

  return null;
};

OfflineNotice.defaultProps = {
  text: strings.NO_INTERNET_CONNECTION,
};

interface IProps {
  style?: Object;
  text?: string;
}

export default OfflineNotice;
