import { connect } from 'react-redux';

import { initForm } from 'Redux/forms/forms.actions';
import AuthMainComponent from './auth-main.component';

export default connect(null, { initForm })(AuthMainComponent);
