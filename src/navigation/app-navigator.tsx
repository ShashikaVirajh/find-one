import React from 'react';
import { connect } from 'react-redux';

import { Spinner } from 'components/ui';
import { ApplicationState } from 'types/reducer.types';

import AuthNavigator from './auth-navigator';
import MainNavigator from './main-navigator';

import { fetchRemoteConfigStart } from 'Redux/app/app.actions';

const AppNavigator = ({ token, isLoading, fetchRemoteConfigStart }: IProps) => {
  const renderNavigator = () => (token ? <MainNavigator /> : <AuthNavigator />);
  const renderSpinner = () => (isLoading ? <Spinner /> : null);

  fetchRemoteConfigStart();

  return (
    <>
      {renderNavigator()}
      {renderSpinner()}
    </>
  );
};

const mapStateToProps = ({ auth, common }: ApplicationState) => ({
  token: auth.token,
  isLoading: common.isLoading,
});

interface IProps {
  fetchRemoteConfigStart: Function;
  token?: string;
  isLoading?: boolean;
}

export default connect(mapStateToProps, { fetchRemoteConfigStart })(AppNavigator);
