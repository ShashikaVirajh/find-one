import { connect } from 'react-redux';

import { SIGN_UP_FORM } from 'constants/forms.constant';
import { ApplicationState } from 'types/reducer.types';

import MobileComponent from './mobile.component';

const mapStateToProps = ({ forms }: ApplicationState) => ({
  mobile: forms[SIGN_UP_FORM]?.values?.mobile || '',
  errors: forms[SIGN_UP_FORM]?.errors || {},
});

export default connect(mapStateToProps)(MobileComponent);
