import { fireEvent, render } from '@testing-library/react-native';
import React from 'react';

import { Icon } from 'components/ui';
import ListItem from './list-item.component';

describe('ListItem', () => {
  it('should render ListItem that is clickable', () => {
    const mockProps = {
      testID: 'listItem',
      onPress: jest.fn(),
    };

    const { getByTestId } = render(<ListItem {...mockProps} />);
    const component = getByTestId('listItem');
    fireEvent.press(component);
  });

  it('should render ListItem with leftcontent as a text', () => {
    const mockProps = {
      testID: 'listItem',
      onPress: jest.fn(),
      leftContent: 'Left Content',
    };

    const { getByText } = render(<ListItem {...mockProps} />);
    expect(getByText('Left Content')).toBeTruthy();
  });

  it('should render ListItem with leftcontent as a component', () => {
    const mockProps = {
      testID: 'listItem',
      onPress: jest.fn(),
      leftContent: <Icon testID='leftContent' />,
    };

    const { getByTestId } = render(<ListItem {...mockProps} />);
    expect(getByTestId('leftContent')).toBeTruthy();
  });

  it('should render ListItem with rightContent as a text', () => {
    const mockProps = {
      testID: 'listItem',
      onPress: jest.fn(),
      rightContent: 'Right Content',
    };

    const { getByText } = render(<ListItem {...mockProps} />);
    expect(getByText('Right Content')).toBeTruthy();
  });

  it('should render ListItem with rightContent as a component', () => {
    const mockProps = {
      testID: 'listItem',
      onPress: jest.fn(),
      rightContent: <Icon testID='rightContent' />,
    };

    const { getByTestId } = render(<ListItem {...mockProps} />);
    expect(getByTestId('rightContent')).toBeTruthy();
  });

  it('should render ListItem with mainContent as a text', () => {
    const mockProps = {
      testID: 'listItem',
      onPress: jest.fn(),
      mainContent: 'Main Content',
    };

    const { getByText } = render(<ListItem {...mockProps} />);
    expect(getByText('Main Content')).toBeTruthy();
  });

  it('should render ListItem with mainContent as a component', () => {
    const mockProps = {
      testID: 'listItem',
      onPress: jest.fn(),
      mainContent: <Icon testID='mainContent' />,
    };

    const { getByTestId } = render(<ListItem {...mockProps} />);
    expect(getByTestId('mainContent')).toBeTruthy();
  });

  it('should render ListItem with subContent as a text', () => {
    const mockProps = {
      testID: 'listItem',
      onPress: jest.fn(),
      subContent: 'Sub Content',
    };

    const { getByText } = render(<ListItem {...mockProps} />);
    expect(getByText('Sub Content')).toBeTruthy();
  });

  it('should render ListItem with subContent as a component', () => {
    const mockProps = {
      testID: 'listItem',
      onPress: jest.fn(),
      subContent: <Icon testID='subContent' />,
    };

    const { getByTestId } = render(<ListItem {...mockProps} />);
    expect(getByTestId('subContent')).toBeTruthy();
  });
});
