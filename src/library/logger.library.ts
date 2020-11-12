import * as Sentry from '@sentry/react-native';

import { SENTRY_DSN } from 'config';

abstract class BaseLogger {
  static init: () => void;
  static log: (name: string, message: string, extras?: any) => void;
  static message: (msg: string) => void;
}

class Logger extends BaseLogger {
  static init() {
    Sentry.init({
      dsn: SENTRY_DSN,
    });
  }

  static log(name: string, message: string, extras?: any) {
    const error = new Error(message);
    error.name = name;

    Sentry.withScope((scope: Sentry.Scope) => {
      if (extras) scope.setExtras(extras);

      Sentry.captureException(error);
    });
  }

  static message(msg: string) {
    Sentry.captureMessage(msg);
  }
}

export default Logger;
