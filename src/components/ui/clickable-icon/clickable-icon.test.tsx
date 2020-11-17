import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import ClickableIcon from './clickable-icon.component';

describe('ClickableIcon', () => {
  it('should render ClickableIcon component', () => {
    const mockProps = {
      testID: 'clickableIcon',
      icon: 'faCamera',
      onPress: jest.fn(),
      color: 'blue',
      disabled: false,
      size: 24,
    };

    const { getByTestId } = render(<ClickableIcon {...mockProps} />);
    const component = getByTestId('clickableIcon');
    fireEvent.press(component);

    expect(component).toBeTruthy();
  });
});
