import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { Icon } from 'components/ui';
import Button from './button.component';

describe('Button', () => {
  it('should render Button that is clickable', () => {
    const mockProps = {
      text: 'Mock Button',
      onPress: jest.fn(),
    };

    const { getByText } = render(<Button {...mockProps} />);
    const component = getByText('Mock Button');
    fireEvent.press(component);
  });

  it('should render Button with frontIcon if frontIcon is available', () => {
    const mockProps = {
      text: 'Mock Button',
      onPress: jest.fn(),
      frontIcon: <Icon testID='frontIcon' />,
    };

    const { getByTestId } = render(<Button {...mockProps} />);
    expect(getByTestId('frontIcon')).toBeTruthy();
  });

  it('should render Button with backIcon if backIcon is available', () => {
    const mockProps = {
      text: 'Mock Button',
      onPress: jest.fn(),
      backIcon: <Icon testID='backIcon' />,
    };

    const { getByTestId } = render(<Button {...mockProps} />);
    expect(getByTestId('backIcon')).toBeTruthy();
  });
});
