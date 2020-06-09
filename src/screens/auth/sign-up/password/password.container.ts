import { connect } from 'react-redux';

import { SIGN_UP_FORM } from 'constants/forms.constant';
import { IApplicationState } from 'types/reducer.types';
import Password from './password.component';

const mapStateToProps = ({ forms }: IApplicationState) => ({
  password: forms[SIGN_UP_FORM]?.values?.password || '',
  values: forms[SIGN_UP_FORM]?.values || {},
  errors: forms[SIGN_UP_FORM]?.errors || {},
});

export default connect(mapStateToProps)(Password);
