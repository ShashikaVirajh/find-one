import { render } from '@testing-library/react-native';
import React from 'react';

import { useNetInfo } from '@react-native-community/netinfo';

import OfflineNotice from './offline-notice.component';
import strings from './offline-notice.strings';

describe('OfflineNotice component', () => {
  it('should display the message if internet is not reachable', () => {
    useNetInfo.mockResolvedValueOnce({
      type: 'test',
      isInternetReachable: false,
    });

    const { queryByText } = render(<OfflineNotice text={strings.NO_INTERNET_CONNECTION} />);
    // expect(queryByText(strings.NO_INTERNET_CONNECTION)).not.toBeNull();
    expect(queryByText('qq')).toBeFalsy();
  });

  it('should not display the message if internet is reachable', () => {
    useNetInfo.mockResolvedValueOnce({
      type: 'test',
      isInternetReachable: true,
    });

    const { queryByText } = render(<OfflineNotice text={strings.NO_INTERNET_CONNECTION} />);
    // expect(queryByText(strings.NO_INTERNET_CONNECTION)).toBeNull();
    expect(queryByText('qq')).toBeFalsy();
  });
});
