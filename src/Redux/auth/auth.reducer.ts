import { Action } from 'types/data.types';
import { AuthReducer } from 'types/reducer.types';
import { authActionTypes } from './auth.types';

const INITIAL_STATE: AuthReducer = {
  token: '',
  user: {
    id: '',
    firstName: '',
    lastName: '',
    handle: '',
    email: '',
    mobile: '',
    role: '',
  },
};

export default (state = INITIAL_STATE, { type, payload }: Action) => {
  switch (type) {
    case authActionTypes.FETCH_AUTH_USER_SUCCESS:
      return fetchAuthUserSuccess(state, payload);

    case authActionTypes.SIGN_IN_SUCCESS:
      return setSignInSuccess(state, payload);

    case authActionTypes.SIGN_UP_SUCCESS:
      return setSignUpSuccess(state, payload);

    case authActionTypes.SIGN_OUT:
      return signOut();

    default:
      return state;
  }
};

const fetchAuthUserSuccess = (state: AuthReducer, payload: Object) => ({
  ...state,
  ...payload,
});

const setSignInSuccess = (state: AuthReducer, payload: Object) => ({
  ...state,
  ...payload,
});

const setSignUpSuccess = (state: AuthReducer, payload: Object) => ({
  ...state,
  ...payload,
});

const signOut = () => ({
  ...INITIAL_STATE,
});
