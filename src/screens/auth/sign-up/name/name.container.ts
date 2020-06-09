import { connect } from 'react-redux';

import { SIGN_UP_FORM } from 'constants/forms.constant';
import { IApplicationState } from 'types/reducer.types';

import NameComponent from './name.component';

const mapStateToProps = ({ forms }: IApplicationState) => ({
  firstName: forms[SIGN_UP_FORM]?.values?.firstName || '',
  lastName: forms[SIGN_UP_FORM]?.values?.lastName || '',
  errors: forms[SIGN_UP_FORM]?.errors || {},
});

export default connect(mapStateToProps)(NameComponent);
