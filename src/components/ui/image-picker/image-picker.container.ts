import { connect } from 'react-redux';

import { addFormData, initForm } from 'Redux/form/form.actions';

import ImagePicker from './image-picker.component';

const mapStateToProps = ({ forms }: any, { form, name }: any) => ({
  fieldValue: forms[form] ? forms[form].values[name] : '',
  fieldErrors: forms[form] ? forms[form].errors[name] : [],
});

export default connect(mapStateToProps, {
  addFormData,
  initForm,
})(ImagePicker);
