import * as AuthActions from './auth.actions';

import { authActionTypes } from './auth.types';

describe('Auth Actions', () => {
  const payload = {};
  const success = () => {};
  const failure = () => {};

  it('should dispatch fetchAuthUserStart action', () => {
    const action = {
      type: authActionTypes.FETCH_AUTH_USER_START,
      success,
      failure,
    };

    expect(AuthActions.fetchAuthUserStart(success, failure)).toEqual(action);
  });

  it('should dispatch fetchAuthUserSuccess action', () => {
    const action = {
      type: authActionTypes.FETCH_AUTH_USER_SUCCESS,
      payload: {},
    };

    expect(AuthActions.fetchAuthUserSuccess(payload)).toEqual(action);
  });

  it('should dispatch signInStart action', () => {
    const action = {
      type: authActionTypes.SIGN_IN_START,
      payload: {},
      success,
      failure,
    };

    expect(AuthActions.signInStart(payload, success, failure)).toEqual(action);
  });

  it('should dispatch signInSuccess action', () => {
    const action = {
      type: authActionTypes.SIGN_IN_SUCCESS,
      payload: {},
    };

    expect(AuthActions.signInSuccess(payload)).toEqual(action);
  });

  it('should dispatch signUpStart action', () => {
    const action = {
      type: authActionTypes.SIGN_UP_START,
      payload: {},
      success,
      failure,
    };

    expect(AuthActions.signUpStart(payload, success, failure)).toEqual(action);
  });

  it('should dispatch signUpSuccess action', () => {
    const action = {
      type: authActionTypes.SIGN_UP_SUCCESS,
      payload: {},
    };

    expect(AuthActions.signUpSuccess(payload)).toEqual(action);
  });

  it('should dispatch signOut action', () => {
    const action = {
      type: authActionTypes.SIGN_OUT,
    };

    expect(AuthActions.signOut()).toEqual(action);
  });
});
