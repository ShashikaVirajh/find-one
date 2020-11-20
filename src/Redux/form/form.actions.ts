import { formActionTypes } from './form.types';

export const initForm = (payload: Object) => ({ type: formActionTypes.INIT_FORM, payload });

export const addFormData = (payload: Object) => ({ type: formActionTypes.ADD_FORM_DATA, payload });

export const resetForm = (payload: string) => ({ type: formActionTypes.RESET_FORM_DATA, payload });

export const setFormError = (payload: Object) => ({
  type: formActionTypes.SET_FORM_ERROR,
  payload,
});
