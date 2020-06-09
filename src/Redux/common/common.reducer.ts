import { IAction } from 'types/data.types';
import { commonTypes } from './common.constants';

const INITIAL_STATE = {
  isLoading: false,
};

export default (state = INITIAL_STATE, { type, payload }: IAction) => {
  switch (type) {
    case commonTypes.TOGGLE_SPINNER:
      return toggleSpinner(state, payload);

    default:
      return state;
  }
};

const toggleSpinner = (state: any, payload: boolean) => ({
  ...state,
  isLoading: payload,
});
