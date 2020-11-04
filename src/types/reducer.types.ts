import { SIGN_IN_FORM, SIGN_UP_FORM } from 'constants/forms.constant';
import { signInForm, signUpForm } from 'types/form.types';

export type IAuthReducer = {
  token?: string;
  user?: any;
};

export type IFormsReducer = {
  [SIGN_IN_FORM]: signInForm;
  [SIGN_UP_FORM]: signUpForm;
};

export type ICommonReducer = {
  isLoading: boolean;
};

export type IApplicationState = {
  auth: IAuthReducer;
  forms: IFormsReducer;
  common: ICommonReducer;
};
