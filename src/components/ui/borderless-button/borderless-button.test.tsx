import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import BorderlessButton from './borderless-button.component';

describe('Borderless Button', () => {
  it('should render BorderlessButton component', () => {
    const mockProps = {
      testID: 'borderlessButton',
      disabled: false,
      onPress: jest.fn(),
      size: 16,
      text: 'Test Button',
      underline: false,
    };

    const { getByTestId } = render(<BorderlessButton {...mockProps} />);
    const component = getByTestId('borderlessButton');
    fireEvent.press(component);

    expect(component).toBeTruthy();
  });
});
