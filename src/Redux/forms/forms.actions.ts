import { formsTypes } from './forms.constants';

export const initForm = (payload: Object) => ({ type: formsTypes.INIT_FORM, payload });

export const addFormData = (payload: Object) => ({ type: formsTypes.ADD_FORM_DATA, payload });

export const resetForm = (payload: string) => ({ type: formsTypes.RESET_FORM_DATA, payload });

export const setFormError = (payload: Object) => ({ type: formsTypes.SET_REQUEST_ERROR, payload });
