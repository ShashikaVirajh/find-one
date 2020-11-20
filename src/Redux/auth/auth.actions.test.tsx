import {
  fetchAuthUserStart,
  fetchAuthUserSuccess,
  signInStart,
  signInSuccess,
  signOut,
  signUpStart,
  signUpSuccess,
} from './auth.actions';

import { authActionTypes } from './auth.types';

describe('Auth Actions', () => {
  const payload = {};
  const success = () => {};
  const failure = () => {};

  it('should create the fetchAuthUserStart action', () => {
    const action = {
      type: authActionTypes.FETCH_AUTH_USER_START,
      success,
      failure,
    };

    expect(fetchAuthUserStart(success, failure)).toEqual(action);
  });

  it('should create the fetchAuthUserSuccess action', () => {
    const action = {
      type: authActionTypes.FETCH_AUTH_USER_SUCCESS,
      payload: {},
    };

    expect(fetchAuthUserSuccess(payload)).toEqual(action);
  });

  it('should create the signInStart action', () => {
    const action = {
      type: authActionTypes.SIGN_IN_START,
      payload: {},
      success,
      failure,
    };

    expect(signInStart(payload, success, failure)).toEqual(action);
  });

  it('should create the signInSuccess action', () => {
    const action = {
      type: authActionTypes.SIGN_IN_SUCCESS,
      payload: {},
    };

    expect(signInSuccess(payload)).toEqual(action);
  });

  it('should create the signUpStart action', () => {
    const action = {
      type: authActionTypes.SIGN_UP_START,
      payload: {},
      success,
      failure,
    };

    expect(signUpStart(payload, success, failure)).toEqual(action);
  });

  it('should create the signUpSuccess action', () => {
    const action = {
      type: authActionTypes.SIGN_UP_SUCCESS,
      payload: {},
    };

    expect(signUpSuccess(payload)).toEqual(action);
  });

  it('should create the signOut action', () => {
    const action = {
      type: authActionTypes.SIGN_OUT,
    };

    expect(signOut()).toEqual(action);
  });
});
