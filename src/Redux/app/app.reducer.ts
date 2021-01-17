import { Action } from 'types/data.types';
import { AppReducer } from 'types/reducer.types';
import { appActionTypes } from './app.types';

export const INITIAL_STATE: AppReducer = {
  remoteConfig: {
    appInfo: {
      appDescription: 'Find someone to help you with your tasks',
    },
  },
};

export default (state = INITIAL_STATE, { type, payload }: Action) => {
  switch (type) {
    case appActionTypes.FETCH_REMOTE_CONFIG_SUCCESS:
      return setRemoteConfig(state, payload);

    default:
      return state;
  }
};

const setRemoteConfig = (state: AppReducer, payload: any) => {
  return {
    ...state,
    remoteConfig: payload,
  };
};
