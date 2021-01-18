import { Action } from 'types/data.types';
import { AppReducer } from 'types/reducer.types';
import { appActionTypes } from './app.types';

export const INITIAL_STATE: AppReducer = {
  remoteConfigurations: {
    appInfo: {
      appDescription: 'Find someone to help you with your tasks',
    },
  },
};

const appReducer = (state = INITIAL_STATE, { type, payload }: Action) => {
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
    remoteConfigurations: payload,
  };
};

const { remoteConfigurations } = INITIAL_STATE;
export { appReducer as default, remoteConfigurations };
