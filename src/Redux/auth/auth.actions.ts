import { authTypes } from './auth.constants';

export const signUpStart = (payload: Object) => ({
  type: authTypes.SIGN_UP_START,
  payload,
});

export const signUpSuccess = (payload: Object) => ({
  type: authTypes.SIGN_UP_SUCCESS,
  payload,
});

export const signUpError = (payload: Object) => ({
  type: authTypes.SIGN_UP_FAILURE,
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

export const signInError = (payload: Object) => ({
  type: authTypes.SIGN_IN_FAILURE,
  payload,
});

export const signOut = () => ({
  type: authTypes.SIGN_OUT,
});
