import { createSelector } from 'reselect';

import { ApplicationState } from 'types/reducer.types';

const selectAuth = ({ auth }: ApplicationState) => auth;

export const selectToken = createSelector([selectAuth], auth => auth.token);

export const selectUser = createSelector([selectAuth], auth => auth.user);

export const selectUserName = createSelector(
  [selectAuth],
  auth => `${auth.user?.firstName} ${auth.user?.lastName}`,
);
