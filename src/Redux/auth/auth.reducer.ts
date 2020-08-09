import { IAction } from 'types/data.types';
import { IAuthReducer } from 'types/reducer.types';
import { authTypes } from './auth.constants';

const INITIAL_STATE = {
  token: '',
  user: '',
};

export default (state = INITIAL_STATE, { type, payload }: IAction) => {
  switch (type) {
    case authTypes.FETCH_AUTH_USER_SUCCESS:
      return fetchAuthUserSuccess(state, payload);

    case authTypes.SIGN_IN_SUCCESS:
      return setSignInSuccess(state, payload);

    case authTypes.SIGN_UP_SUCCESS:
      return setSignUpSuccess(state, payload);

    case authTypes.SIGN_OUT:
      return signOut();

    default:
      return state;
  }
};

const fetchAuthUserSuccess = (state: IAuthReducer, payload: Object) => ({
  ...state,
  ...payload,
});

const setSignInSuccess = (state: IAuthReducer, payload: Object) => ({
  ...state,
  ...payload,
});

const setSignUpSuccess = (state: IAuthReducer, payload: Object) => ({
  ...state,
  ...payload,
});

const signOut = () => ({
  ...INITIAL_STATE,
});
