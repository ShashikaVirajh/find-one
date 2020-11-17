import { render } from '@testing-library/react-native';
import React from 'react';

import Divider from './divider.component';

describe('Divider', () => {
  it('should render Divider component', () => {
    const { getByTestId } = render(<Divider />);
    const component = getByTestId('divider');

    expect(component).toBeTruthy();
  });
});
