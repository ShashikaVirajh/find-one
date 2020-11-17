import { render } from '@testing-library/react-native';
import React from 'react';

import Spinner from './spinner.component';

describe('Spinner', () => {
  it('should render Spinner component', () => {
    const { getByTestId } = render(<Spinner />);
    const component = getByTestId('spinner');

    expect(component).toBeTruthy();
  });
});
