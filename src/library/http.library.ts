import axios from 'axios';

import { BASE_URL } from 'config';
import { httpMethods, versions } from 'enums';
import { Logger } from 'library';
import { ErrorTracker } from 'library';
import { toggleSpinner } from 'Redux/common/common.actions';
import { store } from 'Redux/store';
import { IHeaders } from 'types/data.types';

class Http {
  method: httpMethods;
  action: string;
  token: string;
  data: Object;
  version: versions;

  constructor() {
    this.method = httpMethods.post;
    this.action = '';
    this.token = '';
    this.data = {};
    this.version = versions.V1;
  }

  setAction(action: string) {
    this.action = action;
    return this;
  }

  setData(data: Object) {
    this.data = data;
    return this;
  }

  setToken(token: string) {
    this.token = `Bearer ${token}`;
    return this;
  }

  setMethod(method: httpMethods) {
    this.method = method;
    return this;
  }

  setVersion = (version: versions) => {
    this.version = version;
    return this;
  };

  unsetData() {
    this.data = [];
    return this;
  }

  generateURL = () => {
    let url = `${BASE_URL}/api/${this.version}/${this.action}`;
    if (this.method === httpMethods.get) url += this.serializeParams(this.data);
    return url;
  };

  setHeaders = () => {
    const headers: IHeaders = {
      'Content-Type': 'application/json',
    };
    return headers;
  };

  serializeParams = (params: any) => {
    if (typeof params === undefined || Object.keys(params).length <= 0) return '';

    let queryString = '';
    for (const key in params) {
      if (queryString !== '') queryString += '&';
      queryString += `${key}'='${encodeURIComponent(params[key])}`;
    }
    return `?${queryString}`;
  };

  request = async () => {
    try {
      store.dispatch(toggleSpinner(true));

      const url = this.generateURL();
      const headers = this.setHeaders();

      if (typeof this.token !== undefined) {
        headers.Authorization = this.token;
      }

      const config = {
        url,
        headers,
        method: this.method,
        data: JSON.stringify(this.data) || {},
      };

      const response = await axios(config);

      Logger.log('SUCCESS:', response);
      this.unsetData();
      store.dispatch(toggleSpinner(false));

      return response.data;
    } catch (error) {
      const { response } = error;
      Logger.log('ERROR:', response);

      ErrorTracker.log(
        ErrorTracker.setErrorName(error),
        response?.config?.url,
        ErrorTracker.mapErrorResponse(response),
      );

      this.unsetData();
      store.dispatch(toggleSpinner(false));

      throw response.data;
    }
  };
}

export default new Http();
