import analytics from '@react-native-firebase/analytics';

class Analytics {
  static logEvent = (event: string, params?: any) => analytics().logEvent(event, params);

  static setUserId = (id: string) => analytics().setUserId(id);

  static endSession = () => analytics().setUserId('');

  static setUserProperty = (name: string, value: string) =>
    analytics().setUserProperty(name, value);

  static setCurrentScreen = (screenName: string) =>
    analytics().logScreenView({ screen_name: screenName, screen_class: screenName });
}

export default Analytics;
