import * as Sentry from '@sentry/react-native';
import { AxiosError, AxiosResponse } from 'axios';

import { SENTRY_DSN } from 'config';
import { IErrorResponse } from 'types/data.types';

abstract class Tracker {
  static init: () => void;
  static log: (name: string, message: string, extras?: any) => void;
  static message: (msg: string) => void;
  static setErrorName: (response: AxiosError) => string;
  static mapErrorResponse: (response: AxiosResponse) => IErrorResponse;
}

class ErrorTracker extends Tracker {
  static init() {
    Sentry.init({
      dsn: SENTRY_DSN,
    });
  }

  static log(name: string, message: string, extras?: any) {
    const err = new Error(message);
    err.name = name;

    Sentry.withScope((scope: Sentry.Scope) => {
      if (extras) scope.setExtras(extras);

      Sentry.captureException(err);
    });
  }

  static message(msg: string) {
    Sentry.captureMessage(msg);
  }

  static setErrorName({ code, message, response }: AxiosError) {
    if (code === 'ECONNABORTED') {
      return message === 'Request aborted' ? 'APIRequestAbort' : 'APITimeout';
    }

    return response?.status ? `${response?.status} Error` : 'API Error';
  }

  static mapErrorResponse(response?: AxiosResponse) {
    return {
      headers: response?.config?.headers,
      requestData: JSON.parse(response?.config?.data),
      responseData: response?.data,
      status: response?.status,
    };
  }
}

export default ErrorTracker;