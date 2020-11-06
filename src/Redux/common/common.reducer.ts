import { Action } from 'types/data.types';
import { CommonReducer } from 'types/reducer.types';
import { commonTypes } from './common.constants';

const INITIAL_STATE: CommonReducer = {
  isLoading: false,
};

export default (state = INITIAL_STATE, { type, payload }: Action) => {
  switch (type) {
    case commonTypes.TOGGLE_SPINNER:
      return toggleSpinner(state, payload);

    default:
      return state;
  }
};

const toggleSpinner = (state: CommonReducer, payload: boolean) => ({
  ...state,
  isLoading: payload,
});
