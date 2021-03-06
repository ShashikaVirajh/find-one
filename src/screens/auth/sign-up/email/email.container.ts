import { connect } from 'react-redux';

import { SIGN_UP_FORM } from 'constants/forms.constant';
import { ApplicationState } from 'types/reducer.types';

import EmailComponent from './email.component';

const mapStateToProps = ({ auth, forms }: ApplicationState) => ({
  email: forms[SIGN_UP_FORM]?.values?.email || '',
  errors: forms[SIGN_UP_FORM]?.errors || {},
});

export default connect(mapStateToProps)(EmailComponent);
