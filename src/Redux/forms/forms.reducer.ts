import { formsTypes } from './forms.constants';

const INITIAL_STATE = {};

const initForm = (state: any, { form, field, fieldValue }: any) => {
  const formData = state[form] || {};
  let fields = formData.fields || [];
  const values = formData.values || {};
  const errors = formData.errors || {};
  if (!fields.includes(field)) fields = [...fields, field];

  return {
    ...state,
    [form]: {
      fields,
      formError: '',
      values: { ...values, [field]: fieldValue || '' },
      errors: { ...errors, [field]: [] },
    },
  };
};

const addFormData = (state: any, { form, data }: any) => {
  const formData = state[form];
  const { values, errors } = formData;

  return {
    ...state,
    [form]: {
      ...formData,
      values: { ...values, ...data.values },
      errors: { ...errors, ...data.errors },
      formUpdated: true,
    },
  };
};

const setFormError = (state: any, { form, message }: any) => {
  const formData = state[form];

  return {
    ...state,
    [form]: {
      ...formData,
      formError: message,
    },
  };
};

const resetForm = (state: any, payload: any) => ({
  ...state,
  [payload]: { fields: [], values: {}, errors: {} },
});

export default (state = INITIAL_STATE, { type, payload }: any) => {
  switch (type) {
    case formsTypes.INIT_FORM:
      return initForm(state, payload);
    case formsTypes.ADD_FORM_DATA:
      return addFormData(state, payload);
    case formsTypes.RESET_FORM_DATA:
      return resetForm(state, payload);
    case formsTypes.SET_REQUEST_ERROR:
      return setFormError(state, payload);
    default:
      return state;
  }
};
