import { call, put, takeLatest } from 'redux-saga/effects';

import { signInError, signInSuccess, signUpError, signUpSuccess } from 'Redux/auth/auth.actions';

import { SIGN_IN_FORM, SIGN_UP_FORM } from 'constants/forms.constant';
import { authTypes } from 'Redux/auth/auth.constants';
import { resetForm } from 'Redux/forms/forms.actions';
import { IAuth, ISaga } from 'types/data.types';
import AuthService from './auth.service';

function* signInStart({ payload }: ISaga) {
  try {
    const signInResponse = yield call(AuthService.signIn, payload);
    const mappedSignInResponse: IAuth = signInResponse.token;

    const authUserResponse = yield call(AuthService.fetchAuthUser, signInResponse.token);
    const data = { token: mappedSignInResponse, user: authUserResponse.data };

    yield put(signInSuccess(data));

    yield put(resetForm(SIGN_IN_FORM));
    yield put(resetForm(SIGN_UP_FORM));
  } catch (ex) {
    yield put(signInError(ex.error));
  }
}

function* signUpStart({ payload }: ISaga) {
  try {
    const signUpResponse = yield call(AuthService.signUp, payload);
    const mappedSignUpResponse: IAuth = signUpResponse.token;

    const authUserResponse = yield call(AuthService.fetchAuthUser, signUpResponse.token);
    const data = { token: mappedSignUpResponse, user: authUserResponse.data };

    yield put(signUpSuccess(data));

    yield put(resetForm(SIGN_IN_FORM));
    yield put(resetForm(SIGN_UP_FORM));
  } catch (ex) {
    yield put(signUpError(ex.error));
  }
}

export default function* authSaga() {
  yield takeLatest(authTypes.SIGN_IN_START, signInStart);
  yield takeLatest(authTypes.SIGN_UP_START, signUpStart);
}
