import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import Icon from './icon.component';

describe('Icon', () => {
  it('should render Icon component', () => {
    const mockProps = {
      testID: 'icon',
      icon: 'faCamera',
      onPress: jest.fn(),
      color: 'blue',
      disabled: false,
      size: 24,
    };

    const { getByTestId } = render(<Icon {...mockProps} />);
    const component = getByTestId('icon');
    fireEvent.press(component);

    expect(component).toBeTruthy();
  });
});
