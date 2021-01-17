import { call, put, takeLatest } from 'redux-saga/effects';

import { DEV_APP } from 'config';
import { ConsoleLogger } from 'library';
import { fetchRemoteConfig } from 'library/remote-config.library';
import { fetchRemoteConfigSuccess } from 'Redux/app/app.actions';

import { appActionTypes } from 'Redux/app/app.types';
import { Saga } from 'types/data.types';

function* getRemoteConfig({ success, failure }: Saga) {
  try {
    const payload = yield call(fetchRemoteConfig);

    if (DEV_APP) ConsoleLogger.log('REMOTE CONFIG', payload);
    yield put(fetchRemoteConfigSuccess(payload));

    success?.();
  } catch (ex) {
    failure?.(ex.error);
  }
}

export default function* appSaga() {
  yield takeLatest(appActionTypes.FETCH_REMOTE_CONFIG, getRemoteConfig);
}
