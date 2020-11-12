import { AxiosError, AxiosResponse } from 'axios';

export const setErrorName = ({ code, message, response }: AxiosError) => {
  if (code === 'ECONNABORTED') {
    return message === 'Request aborted' ? 'APIRequestAbort' : 'APITimeout';
  }

  return response?.status ? `${response?.status} Error` : 'API Error';
};

export const mapErrorResponse = (response?: AxiosResponse) => {
  return {
    headers: response?.config?.headers,
    requestData: JSON.parse(response?.config?.data),
    responseData: response?.data,
    status: response?.status,
  };
};
