import { connect } from 'react-redux';

import { signOut } from 'Redux/auth/auth.actions';
import { IApplicationState } from 'types/reducer.types';
import CustomDrawer from './custom-drawer.component';

const mapStateToProps = ({
  auth: {
    user: { firstName, lastName },
  },
}: IApplicationState) => ({
  firstName: firstName || '',
  lastName: lastName || '',
});

export default connect(mapStateToProps, { signOut })(CustomDrawer);
