import { connect } from 'react-redux';

import { SIGN_UP_FORM } from 'constants/forms.constant';
import { fetchAuthUserStart, signUpStart } from 'Redux/auth/auth.actions';
import { resetForm } from 'Redux/form/form.actions';
import { ApplicationState } from 'types/reducer.types';
import ConfirmPassword from './confirm-password.component';

const mapStateToProps = ({ forms }: ApplicationState) => ({
  firstName: forms[SIGN_UP_FORM]?.values?.firstName || '',
  lastName: forms[SIGN_UP_FORM]?.values?.lastName || '',
  email: forms[SIGN_UP_FORM]?.values?.email || '',
  mobile: forms[SIGN_UP_FORM]?.values?.mobile || '',
  password: forms[SIGN_UP_FORM]?.values?.password || '',
  confirmPassword: forms[SIGN_UP_FORM]?.values?.confirmPassword || '',
});

export default connect(mapStateToProps, { fetchAuthUserStart, resetForm, signUpStart })(
  ConfirmPassword,
);
