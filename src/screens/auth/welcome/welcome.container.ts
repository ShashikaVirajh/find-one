import { connect } from 'react-redux';

import { initForm } from 'Redux/forms/forms.actions';
import WelcomeComponent from './welcome.component';

export default connect(null, { initForm })(WelcomeComponent);
