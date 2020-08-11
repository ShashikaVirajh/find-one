import { authTypes } from './auth.constants';

export const fetchAuthUserStart = (success: Function, failure: Function) => ({
  type: authTypes.FETCH_AUTH_USER_START,
  success,
  failure,
});

export const fetchAuthUserSuccess = (payload: Object) => ({
  type: authTypes.FETCH_AUTH_USER_SUCCESS,
  payload,
});

export const signInStart = (payload: Object, success: Function, failure: Function) => ({
  type: authTypes.SIGN_IN_START,
  payload,
  success,
  failure,
});

export const signInSuccess = (payload: Object) => ({
  type: authTypes.SIGN_IN_SUCCESS,
  payload,
});

export const signUpStart = (payload: Object, success: Function, failure: Function) => ({
  type: authTypes.SIGN_UP_START,
  payload,
  success,
  failure,
});

export const signUpSuccess = (payload: Object) => ({
  type: authTypes.SIGN_UP_SUCCESS,
  payload,
});

export const signOut = () => ({
  type: authTypes.SIGN_OUT,
});
