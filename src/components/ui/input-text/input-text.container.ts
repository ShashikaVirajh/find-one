import { connect } from 'react-redux';

import { addFormData, initForm } from 'Redux/form/form.actions';

import InputText from './input-text.component';

const mapStateToProps = ({ forms }: any, { form, name }: any) => ({
  fieldValue: forms[form] ? forms[form].values[name] : '',
  fieldErrors: forms[form] ? forms[form].errors[name] : [],
});

export default connect(mapStateToProps, {
  addFormData,
  initForm,
})(InputText);
