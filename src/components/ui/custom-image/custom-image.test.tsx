import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import CustomImage from './custom-image.component';

const mockImage = jest.mock('assets/images/home-logo.jpg', () => () => null);

describe('CustomImage', () => {
  const mockProps = {
    testID: 'customImage',
    height: '300',
    width: '100%',
    borderRadius: 4,
    source: mockImage,
    onPress: jest.fn(),
  };

  it('should render CustomImage component', () => {
    const { getByTestId } = render(<CustomImage {...mockProps} />);
    const component = getByTestId('customImage');

    expect(component).toBeTruthy();
  });

  it('should be clickable if it is not disabled', () => {
    const { getByTestId } = render(<CustomImage disabled={false} {...mockProps} />);
    const component = getByTestId('customImage');

    fireEvent.press(component);
  });
});
