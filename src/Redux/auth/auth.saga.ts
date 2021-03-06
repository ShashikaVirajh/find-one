import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchAuthUserSuccess, signInSuccess, signUpSuccess } from 'Redux/auth/auth.actions';

import { authActionTypes } from 'Redux/auth/auth.types';
import { Auth, Saga } from 'types/data.types';
import AuthService from './auth.service';

import { analyts } from 'constants/analytics.constants';
import { Analytics } from 'library';

import { store } from 'Redux/store';

function* signInStart({ payload, success, failure }: Saga) {
  try {
    const signInResponse = yield call(AuthService.signIn, payload);
    const token: Auth = signInResponse.token;

    Analytics.logEvent(analyts.SIGNED_IN, { email: payload.email });

    yield put(signInSuccess({ token }));
    success?.();
  } catch (ex) {
    failure?.(ex.error);
  }
}

function* signUpStart({ payload, success, failure }: Saga) {
  try {
    const signUpResponse = yield call(AuthService.signUp, payload);
    const token: Auth = signUpResponse.token;

    Analytics.logEvent(analyts.SIGNED_UP, { email: payload.email });

    yield put(signUpSuccess({ token }));
    success?.();
  } catch (ex) {
    failure?.(ex.error);
  }
}

function* fetchAuthUserStart({ success, failure }: Saga) {
  try {
    const {
      auth: { token },
    } = store.getState();

    const authUserResponse = yield call(AuthService.fetchAuthUser, token);

    yield put(fetchAuthUserSuccess({ user: authUserResponse.data }));
    success?.();
  } catch (ex) {
    failure?.(ex.error);
  }
}

export default function* authSaga() {
  yield takeLatest(authActionTypes.FETCH_AUTH_USER_START, fetchAuthUserStart);
  yield takeLatest(authActionTypes.SIGN_IN_START, signInStart);
  yield takeLatest(authActionTypes.SIGN_UP_START, signUpStart);
}
