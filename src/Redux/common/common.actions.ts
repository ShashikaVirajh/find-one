import { commonActionTypes } from './common.types';

export const toggleSpinner = (payload: boolean) => ({
  type: commonActionTypes.TOGGLE_SPINNER,
  payload,
});
