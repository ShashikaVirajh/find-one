import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { OfflineNotice } from 'components';
import { persistor, store } from 'Redux/store';

import library from 'library/icon.library';
import AppNavigator from 'navigation/app-navigator';

const App = () => {
  useEffect(() => {}, []);

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <OfflineNotice />
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export { App, library };
