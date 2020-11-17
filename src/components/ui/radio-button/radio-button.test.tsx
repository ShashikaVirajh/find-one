import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import RadioButton from './radio-button.component';

describe('RadioButton', () => {
  it('should render RadioButton component', () => {
    const mockProps = {
      testID: 'radioButton',
      text: 'TestRadio',
      option: 'testRadio',
      checked: false,
      onPress: jest.fn(),
    };

    const { getByTestId } = render(<RadioButton {...mockProps} />);
    const component = getByTestId('radioButton');
    fireEvent.press(component);

    expect(component).toBeTruthy();
  });
});
