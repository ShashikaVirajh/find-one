import React from 'react';
import { connect } from 'react-redux';

import { Spinner } from 'components/ui';
import { IApplicationState } from 'types/reducer.types';

import AuthNavigator from './auth-navigator';
import MainNavigator from './main-navigator';

const AppNavigator = ({ token, isLoading }: IProps) => {
  const _renderNavigator = () => (token ? <MainNavigator /> : <AuthNavigator />);

  const _renderSpinner = () => (isLoading ? <Spinner /> : null);

  return (
    <>
      {_renderNavigator()}
      {_renderSpinner()}
    </>
  );
};

const mapStateToProps = ({ auth, common }: IApplicationState) => ({
  token: auth.token,
  isLoading: common.isLoading,
});

interface IProps {
  token?: string;
  isLoading?: boolean;
}

export default connect(mapStateToProps)(AppNavigator);
