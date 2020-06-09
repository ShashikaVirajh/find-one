import React from 'react';

import { useNetInfo } from '@react-native-community/netinfo';

import { Label } from 'components/ui';
import styles from './connection.styles';

const Connection = ({ style, text }: IProps) => {
  const netInfo = useNetInfo();

  if (!netInfo.isConnected) {
    return <Label style={[styles.label, style]} type={Label.Types.MEDIUM} text={text} />;
  }

  return null;
};

Connection.defaultProps = {
  text: 'No Internet Connection',
};

interface IProps {
  style?: Object;
  text?: string;
}

export default Connection;
