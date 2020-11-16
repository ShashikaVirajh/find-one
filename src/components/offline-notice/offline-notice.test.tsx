import { render } from '@testing-library/react-native';
import React from 'react';

import OfflineNotice from './offline-notice.component';
import strings from './offline-notice.strings';

describe('OfflineNotice component', () => {
  const { getByText } = render(<OfflineNotice style={{}} text='No Internet Connection' />);

  it('should', () => {
    expect(getByText(strings.NO_INTERNET_CONNECTION)).toBeTruthy();
  });
});
