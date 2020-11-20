import { toggleSpinner } from './common.actions';

import { commonActionTypes } from './common.types';

describe('Common Actions', () => {
  const payload = true;

  it('should dispatch fetchAuthUserStart action', () => {
    const action = {
      type: commonActionTypes.TOGGLE_SPINNER,
      payload: true,
    };

    expect(toggleSpinner(payload)).toEqual(action);
  });
});
