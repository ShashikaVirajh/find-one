import { connect } from 'react-redux';

import { initForm } from 'Redux/form/form.actions';
import WelcomeComponent from './welcome.component';

export default connect(null, { initForm })(WelcomeComponent);
