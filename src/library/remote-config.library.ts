import remoteConfig from '@react-native-firebase/remote-config';

import Logger from 'library/logger.library';
import { remoteConfigurations } from 'Redux/app/app.reducer';

import { REMOTE_CONFIG_MINIMUM_FETCH_INTERVAL } from 'config';

class RemoteConfig {
  static setRemoteConfigCacheInterval = async () => {
    await remoteConfig().setConfigSettings({
      minimumFetchIntervalMillis: REMOTE_CONFIG_MINIMUM_FETCH_INTERVAL,
    });
  };

  static fetchRemoteConfig = (): Promise<{ [key: string]: string }> =>
    remoteConfig()
      .setDefaults({
        appInfo: JSON.stringify(remoteConfigurations?.appInfo),
      })
      .then(() => remoteConfig().fetchAndActivate())
      .then(() => RemoteConfig.getValues())
      .catch((error: string) => {
        Logger.log('ErrorFromRemoteConfig', error);
        return RemoteConfig.getValues();
      });

  private static getValues = () => {
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
}

export default RemoteConfig;
