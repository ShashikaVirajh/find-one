import { render } from '@testing-library/react-native';
import React from 'react';

import Divider from './divider.component';

describe('Divider', () => {
  const props = {
    backgroundColor: 'gray',
    height: 20,
    width: '100%',
  };
  it('test', () => {
    const { getByTestId } = render(<Divider {...props} />);
    const divider = getByTestId('divide');
    expect(divider).toBeTruthy();
  });
});
