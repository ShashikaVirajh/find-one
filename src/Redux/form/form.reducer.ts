import { SIGN_IN_FORM, SIGN_UP_FORM } from 'constants/forms.constant';
import { Action } from 'types/data.types';
import { FormsReducer } from 'types/reducer.types';
import { formActionTypes } from './form.types';

const INITIAL_STATE: FormsReducer = {
  [SIGN_IN_FORM]: {
    fields: [],
    errors: {},
    values: {
      email: '',
      password: '',
    },
  },
  [SIGN_UP_FORM]: {
    fields: [],
    errors: {},
    values: {
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      password: '',
      confirmPassword: '',
    },
  },
};

export default (state = INITIAL_STATE, { type, payload }: Action) => {
  switch (type) {
    case formActionTypes.INIT_FORM:
      return initForm(state, payload);
    case formActionTypes.ADD_FORM_DATA:
      return addFormData(state, payload);
    case formActionTypes.RESET_FORM_DATA:
      return resetForm(state, payload);
    case formActionTypes.SET_FORM_ERROR:
      return setFormError(state, payload);
    default:
      return state;
  }
};

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

const resetForm = (state: FormsReducer, payload: any) => ({
  ...state,
  [payload]: { fields: [], values: {}, errors: {} },
});
