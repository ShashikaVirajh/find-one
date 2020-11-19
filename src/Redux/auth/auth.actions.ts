import { authActionTypes } from './auth.types';

export const fetchAuthUserStart = (success: Function, failure: Function) => ({
  type: authActionTypes.FETCH_AUTH_USER_START,
  success,
  failure,
});

export const fetchAuthUserSuccess = (payload: Object) => ({
  type: authActionTypes.FETCH_AUTH_USER_SUCCESS,
  payload,
});

export const signInStart = (payload: Object, success: Function, failure: Function) => ({
  type: authActionTypes.SIGN_IN_START,
  payload,
  success,
  failure,
});

export const signInSuccess = (payload: Object) => ({
  type: authActionTypes.SIGN_IN_SUCCESS,
  payload,
});

export const signUpStart = (payload: Object, success: Function, failure: Function) => ({
  type: authActionTypes.SIGN_UP_START,
  payload,
  success,
  failure,
});

export const signUpSuccess = (payload: Object) => ({
  type: authActionTypes.SIGN_UP_SUCCESS,
  payload,
});

export const signOut = () => ({
  type: authActionTypes.SIGN_OUT,
});
