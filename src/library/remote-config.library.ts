import remoteConfig from '@react-native-firebase/remote-config';

import Logger from 'library/logger.library';
import { INITIAL_STATE as appReducerInitialState } from 'Redux/app/app.reducer';

import { REMOTE_CONFIG_MINIMUM_FETCH_INTERVAL } from 'config';

export const setRemoteConfigCacheInterval = async () => {
  await remoteConfig().setConfigSettings({
    minimumFetchIntervalMillis: REMOTE_CONFIG_MINIMUM_FETCH_INTERVAL,
  });
};

export const fetchRemoteConfig = (): Promise<{ [key: string]: string }> =>
  remoteConfig()
    .setDefaults({
      appInfo: JSON.stringify(appReducerInitialState?.remoteConfig?.appInfo),
    })
    .then(() => remoteConfig().fetchAndActivate())
    .then(() => getValues())
    .catch((error: string) => {
      Logger.log('ErrorFromRemoteConfig', error);
      return getValues();
    });

const getValues = () => {
  const values = remoteConfig().getAll();

  return Object.keys(values).reduce((obj, val) => {
    let value = values[val].asString();
    try {
      value = JSON.parse(value);
    } catch (e) {}
    return {
      ...obj,
      [val]: value,
    };
  }, {});
};
