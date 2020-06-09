import { IAction } from 'types/data.types';
import { IAuthReducer } from 'types/reducer.types';
import { authTypes } from './auth.constants';

const INITIAL_STATE = {
  token: '',
  user: '',
  error: '',
};

export default (state = INITIAL_STATE, { type, payload }: IAction) => {
  switch (type) {
    case authTypes.SIGN_UP_START:
      return setSignUpStart(state);

    case authTypes.SIGN_UP_SUCCESS:
      return setSignUpSuccess(state, payload);

    case authTypes.SIGN_UP_FAILURE:
      return setSignUpError(state, payload);

    case authTypes.SIGN_IN_START:
      return setSignInStart(state);

    case authTypes.SIGN_IN_SUCCESS:
      return setSignInSuccess(state, payload);

    case authTypes.SIGN_IN_FAILURE:
      return setSignInError(state, payload);

    case authTypes.SIGN_OUT:
      return signOut();

    default:
      return state;
  }
};

const setSignUpStart = (state: IAuthReducer) => ({
  ...state,
});

const setSignUpSuccess = (state: IAuthReducer, payload: Object) => ({
  ...state,
  ...payload,
  error: '',
});

const setSignUpError = (state: IAuthReducer, payload: Object) => ({
  ...state,
  token: '',
  error: payload,
});

const setSignInStart = (state: IAuthReducer) => ({
  ...state,
});

const setSignInSuccess = (state: IAuthReducer, payload: Object) => ({
  ...state,
  ...payload,
  error: '',
});

const setSignInError = (state: IAuthReducer, payload: Object) => ({
  ...state,
  token: '',
  error: payload,
});

const signOut = () => ({
  ...INITIAL_STATE,
});
