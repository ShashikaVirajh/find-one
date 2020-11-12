import axios from 'axios';

import { mapErrorResponse, setErrorName } from 'utils/error-logs.utils';

import { BASE_URL } from 'config';
import { httpMethods, versions } from 'enums';
import { ConsoleLogger, Logger } from 'library';
import { toggleSpinner } from 'Redux/common/common.actions';
import { store } from 'Redux/store';
import { Headers } from 'types/data.types';

class Http {
  static action: string;
  static data: Object;
  static method: httpMethods;
  static token: string;
  static version: versions;

  static setAction(action: string) {
    Http.action = action;
    return this;
  }

  static setData(data: Object) {
    Http.data = data;
    return this;
  }

  static setMethod(method: httpMethods) {
    Http.method = method;
    return this;
  }

  static setToken(token: string) {
    Http.token = `Bearer ${token}`;
    return this;
  }

  static setVersion(version: versions) {
    Http.version = version;
    return this;
  }

  static unsetData() {
    return (Http.data = []);
  }

  static generateURL() {
    let url = `${BASE_URL}/api/${Http.version}/${Http.action}`;
    if (Http.method === httpMethods.get) url += Http.serializeParams(Http.data);
    return url;
  }

  static setHeaders() {
    const headers: Headers = {
      'Content-Type': 'application/json',
    };
    return headers;
  }

  static serializeParams(params: any) {
    if (typeof params === undefined || Object.keys(params).length <= 0) return '';

    let queryString = '';
    for (const key in params) {
      if (queryString !== '') queryString += '&';
      queryString += `${key}'='${encodeURIComponent(params[key])}`;
    }
    return `?${queryString}`;
  }

  static request = async () => {
    try {
      store.dispatch(toggleSpinner(true));

      const url = Http.generateURL();
      const headers = Http.setHeaders();

      if (typeof Http.token !== undefined) {
        headers.Authorization = Http.token;
      }

      const config = {
        url,
        headers,
        method: Http.method,
        data: JSON.stringify(Http.data) || {},
      };

      const response = await axios(config);

      ConsoleLogger.log('SUCCESS:', response);
      Http.unsetData();
      store.dispatch(toggleSpinner(false));

      return response.data;
    } catch (error) {
      const { response } = error;
      ConsoleLogger.log('ERROR:', response);

      Logger.log(setErrorName(error), response?.config?.url, mapErrorResponse(response));

      Http.unsetData();
      store.dispatch(toggleSpinner(false));

      throw response.data;
    }
  };
}

export default Http;
