import { addFormData, initForm, resetForm, setFormError } from './form.actions';
import { formActionTypes } from './form.types';

describe('Form Actions', () => {
  const payload = {};

  test('should create action initForm', () => {
    const action = {
      type: formActionTypes.INIT_FORM,
      payload,
    };

    expect(initForm(payload)).toEqual(action);
  });

  test('should create action addFormData', () => {
    const action = {
      type: formActionTypes.ADD_FORM_DATA,
      payload,
    };

    expect(addFormData(payload)).toEqual(action);
  });

  test('should create action resetForm', () => {
    const action = {
      type: formActionTypes.RESET_FORM_DATA,
      payload: 'formName',
    };

    expect(resetForm('formName')).toEqual(action);
  });

  test('should create action setFormError', () => {
    const action = {
      type: formActionTypes.SET_FORM_ERROR,
      payload,
    };

    expect(setFormError(payload)).toEqual(action);
  });
});
