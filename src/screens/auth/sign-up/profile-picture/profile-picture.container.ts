import { connect } from 'react-redux';

// import { SIGN_UP_FORM } from 'constants/forms.constant';
import { IApplicationState } from 'types/reducer.types';

import ProfilePicture from './profile-picture.component';

const mapStateToProps = ({ forms }: IApplicationState) => ({});

export default connect(mapStateToProps)(ProfilePicture);
