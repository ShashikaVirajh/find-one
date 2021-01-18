import { createSelector } from 'reselect';

import { ApplicationState } from 'types/reducer.types';

const selectApp = ({ app }: ApplicationState) => app;

export const selectAppDescription = createSelector(
  [selectApp],
  app => app?.remoteConfigurations?.appInfo?.appDescription,
);
