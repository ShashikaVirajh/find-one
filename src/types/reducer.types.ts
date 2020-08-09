import { SIGN_IN_FORM, SIGN_UP_FORM } from 'constants/forms.constant';
import { signInForm, signUpForm } from 'types/form.types';

export interface IAuthReducer {
  token?: string;
  user?: any;
}

export interface IFormsReducer {
  [SIGN_IN_FORM]: signInForm;
  [SIGN_UP_FORM]: signUpForm;
}

export interface ICommonReducer {
  isLoading: boolean;
}

export interface IApplicationState {
  auth: IAuthReducer;
  forms: IFormsReducer;
  common: ICommonReducer;
}
