import { commonTypes } from './common.constants';

export const toggleSpinner = (payload: boolean) => ({
  type: commonTypes.TOGGLE_SPINNER,
  payload,
});
