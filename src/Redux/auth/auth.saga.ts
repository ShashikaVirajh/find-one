import { call, put, takeLatest } from 'redux-saga/effects';

import { fetchAuthUserSuccess, signInSuccess, signUpSuccess } from 'Redux/auth/auth.actions';

import { authTypes } from 'Redux/auth/auth.constants';
import { Auth, Saga } from 'types/data.types';
import AuthService from './auth.service';

import { store } from 'Redux/store';

function* signInStart({ payload, success, failure }: Saga) {
  try {
    const signInResponse = yield call(AuthService.signIn, payload);
    const token: Auth = signInResponse.token;

    yield put(signInSuccess({ token }));
    if (success) success();
  } catch (ex) {
    if (failure) failure(ex.error);
  }
}

function* signUpStart({ payload, success, failure }: Saga) {
  try {
    const signUpResponse = yield call(AuthService.signUp, payload);
    const token: Auth = signUpResponse.token;

    yield put(signUpSuccess({ token }));
    if (success) success();
  } catch (ex) {
    if (failure) failure(ex.error);
  }
}

function* fetchAuthUserStart({ success, failure }: Saga) {
  try {
    const {
      auth: { token },
    } = store.getState();

    const authUserResponse = yield call(AuthService.fetchAuthUser, token);

    yield put(fetchAuthUserSuccess({ user: authUserResponse.data }));
    if (success) return success();
  } catch (ex) {
    if (failure) failure(ex.error);
  }
}

export default function* authSaga() {
  yield takeLatest(authTypes.FETCH_AUTH_USER_START, fetchAuthUserStart);
  yield takeLatest(authTypes.SIGN_IN_START, signInStart);
  yield takeLatest(authTypes.SIGN_UP_START, signUpStart);
}
