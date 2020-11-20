import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

import AsyncStorage from '@react-native-community/async-storage';

import authReducer from 'Redux/auth/auth.reducer';
import commonReducer from 'Redux/common/common.reducer';
import formsReducer from 'Redux/form/form.reducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  common: commonReducer,
  forms: formsReducer,
  auth: authReducer,
});

export default persistReducer(persistConfig, rootReducer);
