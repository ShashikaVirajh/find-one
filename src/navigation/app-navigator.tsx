import React from 'react';
import { connect } from 'react-redux';

import { Spinner } from 'components/ui';
import { IApplicationState } from 'types/reducer.types';

import AuthNavigator from './auth-navigator';
import MainNavigator from './main-navigator';

const AppNavigator = ({ user, isLoading }: IProps) => {
  const _renderNavigator = () => (user ? <MainNavigator /> : <AuthNavigator />);

  const _renderSpinner = () => (isLoading ? <Spinner /> : null);

  return (
    <>
      {_renderNavigator()}
      {_renderSpinner()}
    </>
  );
};

const mapStateToProps = ({ auth, common }: IApplicationState) => ({
  user: auth.user,
  isLoading: common.isLoading,
});

interface IProps {
  user?: string;
  isLoading?: boolean;
}

export default connect(mapStateToProps)(AppNavigator);
