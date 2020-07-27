import { connect } from 'react-redux';

import { SIGN_IN_FORM } from 'constants/forms.constant';
import { signInStart } from 'Redux/auth/auth.actions';
import { IApplicationState } from 'types/reducer.types';
import SignInComponent from './sign-in.component';

const mapStateToProps = ({ auth, forms }: IApplicationState) => ({
  email: forms[SIGN_IN_FORM]?.values?.email || '',
  password: forms[SIGN_IN_FORM]?.values?.password || '',
});

export default connect(mapStateToProps, { signInStart })(SignInComponent);
