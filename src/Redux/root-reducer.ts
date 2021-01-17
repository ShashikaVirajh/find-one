import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';

import appReducer from 'Redux/app/app.reducer';
import authReducer from 'Redux/auth/auth.reducer';
import commonReducer from 'Redux/common/common.reducer';
import formsReducer from 'Redux/form/form.reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['app', 'auth'],
};

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  common: commonReducer,
  forms: formsReducer,
});

export default persistReducer(persistConfig, rootReducer);
