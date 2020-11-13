import axios from 'axios';

import { mapErrorResponse, setErrorName } from 'utils/error-logs.utils';

import { BASE_URL, DEV_APP } from 'config';
import { httpMethods, versions } from 'enums';
import { ConsoleLogger, Logger } from 'library';
import { toggleSpinner } from 'Redux/common/common.actions';
import { store } from 'Redux/store';
import { Headers } from 'types/data.types';

class Http {
  private static action: string;
  private static data: Object;
  private static method: httpMethods;
  private static token: string;
  private static version: versions;

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

      if (DEV_APP) ConsoleLogger.log(`SUCCESS: ${Http.action}`, response);

      Http.unsetData();
      store.dispatch(toggleSpinner(false));

      return response.data;
    } catch (error) {
      const { response } = error;
      if (DEV_APP) ConsoleLogger.log(`ERROR: ${Http.action}`, response);

      Logger.log(setErrorName(error), response?.config?.url, mapErrorResponse(response));

      Http.unsetData();
      store.dispatch(toggleSpinner(false));

      throw response.data;
    }
  };

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

  private static unsetData() {
    return (Http.data = []);
  }

  private static generateURL() {
    let url = `${BASE_URL}/api/${Http.version}/${Http.action}`;
    if (Http.method === httpMethods.get) url += Http.serializeParams(Http.data);
    return url;
  }

  private static setHeaders() {
    const headers: Headers = {
      'Content-Type': 'application/json',
    };
    return headers;
  }

  private static serializeParams(params: any) {
    if (typeof params === undefined || Object.keys(params).length <= 0) return '';

    let queryString = '';
    for (const key in params) {
      if (queryString !== '') queryString += '&';
      queryString += `${key}'='${encodeURIComponent(params[key])}`;
    }
    return `?${queryString}`;
  }
}

export default Http;
