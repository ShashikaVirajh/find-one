// import { useNavigation } from '@react-navigation/native';
// import { fireEvent, render } from '@testing-library/react-native';
// import React from 'react';

// import { Icon } from 'components/ui';
// import Screen from './screen.component';

// const useNavigation = jest.fn();

describe('Screen', () => {
  it('should render Screen', () => {
    const mockProps = {
      testID: 'screen',
      onPress: jest.fn(),
    };

    // const { getByTestId } = render(<Screen {...mockProps} />);
    // const component = getByTestId('screen');
    // expect(component).toBeTruthy();
  });

  // it('should render Screen', () => {
  //   const mockProps = {
  //     testID: 'screen',
  //     onPress: jest.fn(),
  //     description: 'Mock Description',
  //     useNavigation: {
  //       navigate: jest.fn(),
  //     },
  //   };

  //   const { getByText } = render(<Screen {...mockProps} />);
  //   const component = getByText('Mock Description');
  //   expect(component).toBeTruthy();
  // });
});
