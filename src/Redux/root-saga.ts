import { all } from 'redux-saga/effects';

import appSaga from 'Redux/app/app.saga';
import authSaga from 'Redux/auth/auth.saga';

export default function* rootSaga() {
  yield all([appSaga(), authSaga()]);
}
