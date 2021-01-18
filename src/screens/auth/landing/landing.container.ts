import { connect } from 'react-redux';

import { initForm } from 'Redux/form/form.actions';
import { ApplicationState } from 'types/reducer.types';
import Landing from './landing.component';

const mapStateToProps = ({ app: { remoteConfigurations } }: ApplicationState) => ({
  appDescription: remoteConfigurations?.appInfo?.appDescription,
});

export default connect(mapStateToProps, { initForm })(Landing);
