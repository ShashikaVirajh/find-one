import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { OfflineNotice } from 'components';
import { persistor, store } from 'Redux/store';

import library from 'library/icon.library';
import AppNavigator from 'navigation/app-navigator';

import Analytics from 'appcenter-analytics';
// import Crashes from 'appcenter-crashes';

const App = () => {
  useEffect(() => {
    Analytics.trackEvent('Analytics are working.....');
    // checkPreviousSession();
  }, []);

  // const checkPreviousSession = async () => {
  //   const didCrash = await Crashes.hasCrashedInLastSession();
  //   if (didCrash) {
  //     const report = await Crashes.lastSessionCrashReport();
  //     alert("Sorry about that crash, we're working on a solution");
  //   }
  // };

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
