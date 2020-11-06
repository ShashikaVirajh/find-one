import React from 'react';

import { useNetInfo } from '@react-native-community/netinfo';

import { Label } from 'components/ui';
import { Utils } from 'library';
import styles from './offline-notice.styles';

const OfflineNotice = ({ style, text }: IProps) => {
  const netInfo = useNetInfo();

  if (netInfo.type !== 'unknown' && netInfo.isInternetReachable === false) {
    return <Label size={Utils.getScaledNumber(18)} style={[styles.label, style]} text={text} />;
  }

  return null;
};

OfflineNotice.defaultProps = {
  text: 'No Internet Connection',
};

interface IProps {
  style?: Object;
  text?: string;
}

export default OfflineNotice;
