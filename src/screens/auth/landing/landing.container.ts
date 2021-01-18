import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAppDescription } from 'Redux/app/app.selectors';
import { initForm } from 'Redux/form/form.actions';
import { ApplicationState } from 'types/reducer.types';
import Landing from './landing.component';

const mapStateToProps = () =>
  createStructuredSelector<ApplicationState, { appDescription: string }>({
    appDescription: selectAppDescription,
  });

export default connect(mapStateToProps, { initForm })(Landing);
