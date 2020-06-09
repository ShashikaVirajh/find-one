import { all } from 'redux-saga/effects';

import authSaga from 'Redux/auth/auth.saga';

export default function* rootSaga() {
  yield all([authSaga()]);
}
