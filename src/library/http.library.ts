import axios from 'axios';

import { BASE_URL } from 'config';
import { httpMethods } from 'enums';
import { Logger } from 'library';
import { toggleSpinner } from 'Redux/common/common.actions';
import { store } from 'Redux/store';
import { IHeaders } from 'types/data.types';

class Http {
  method: httpMethods;
  url: string;
  token: string;
  data: Object;

  constructor() {
    this.method = httpMethods.post;
    this.url = '';
    this.token = '';
    this.data = {};
  }

  setUrl(url: string) {
    this.url = url;
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

  unsetData() {
    this.data = [];
    return this;
  }

  async request() {
    try {
      store.dispatch(toggleSpinner(true));

      let url = BASE_URL + this.url;
      if (this.method === httpMethods.get) url += this.serializeParams(this.data);

      const headers: IHeaders = {
        'Content-Type': 'application/json',
      };

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
    } catch ({ response }) {
      Logger.log('ERROR:', response);

      this.unsetData();

      store.dispatch(toggleSpinner(false));

      throw response.data;
    }
  }

  private serializeParams(params: any) {
    if (typeof params === undefined || Object.keys(params).length <= 0) return '';

    let queryString = '';
    for (const key in params) {
      if (queryString !== '') queryString += '&';
      queryString += `${key}'='${encodeURIComponent(params[key])}`;
    }
    return `?${queryString}`;
  }
}

export default new Http();
