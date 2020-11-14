import { applyMiddleware, createStore } from 'redux';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import { DEV_APP } from 'config';
import rootReducer from './root-reducer';
import rootSaga from './root-saga';

const createFlipperMiddleware = require('rn-redux-middleware-flipper').default;

const INITIAL_STATE = {};

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (DEV_APP) {
  const flipperMiddleware = createFlipperMiddleware();
  middleware.push(flipperMiddleware);
}

const store = createStore(rootReducer, INITIAL_STATE, applyMiddleware(...middleware));

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

export { store, persistor };
