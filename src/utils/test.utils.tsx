import { NavigationContainer } from '@react-navigation/native';
import { render } from '@testing-library/react-native';
import React, { ElementType } from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import { store } from 'Redux/store';

export const renderWithRedux = (component: ElementType) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

export const renderWithReduxAndNavigation = (component: ElementType) => {
  const App = component;

  return {
    ...render(
      <Provider store={store}>
        <NavigationContainer>
          <App />
        </NavigationContainer>
      </Provider>,
    ),
    store,
  };
};

export const renderWithMockStore = (component: ElementType, mockStore: object) => {
  const mockReducer = configureStore([]);
  const store = mockReducer(mockStore);

  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  };
};

export const makeProps = (params: { [key: string]: any } = {}, props?: object) => ({
  navigation: {
    addListener: jest.fn().mockReturnValue(jest.fn),
    navigate: jest.fn(),
    goBack: jest.fn(),
    reset: jest.fn(),
    popToTop: jest.fn(),
    push: jest.fn(),
  },
  route: { params },
  ...props,
});

export const makeForm = (...fields: string[]) => {
  const form = {
    fields: [] as string[],
    errors: {} as { [key: string]: string[] },
    values: {} as { [key: string]: string },
    formUpdated: true,
  };

  fields.forEach((field: string) => {
    form.fields.push(field);
    form.errors[field] = [];
    form.values[field] = '';
  });

  return form;
};
