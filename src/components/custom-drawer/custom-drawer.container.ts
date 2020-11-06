import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { signOut } from 'Redux/auth/auth.actions';
import { selectUserName } from 'Redux/auth/auth.selectors';
import { ApplicationState } from 'types/reducer.types';
import CustomDrawer from './custom-drawer.component';

const mapStateToProps = () =>
  createStructuredSelector<ApplicationState, { userName: string }>({
    userName: selectUserName,
  });

export default connect(mapStateToProps, { signOut })(CustomDrawer);
