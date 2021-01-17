import { appActionTypes } from './app.types';

export const fetchRemoteConfigStart = (success: Function, failure: Function) => ({
  type: appActionTypes.FETCH_REMOTE_CONFIG,
  success,
  failure,
});

export const fetchRemoteConfigSuccess = (payload: Object) => ({
  type: appActionTypes.FETCH_REMOTE_CONFIG_SUCCESS,
  payload,
});
