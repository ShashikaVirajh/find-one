import { SIGN_IN_FORM, SIGN_UP_FORM } from 'constants/forms.constant';
import { User } from 'types/data.types';
import { signInForm, signUpForm } from 'types/form.types';

export type AuthReducer = {
  token: string;
  user: User;
};

export type FormsReducer = {
  [SIGN_IN_FORM]: signInForm;
  [SIGN_UP_FORM]: signUpForm;
};

export type CommonReducer = {
  isLoading: boolean;
};

export type ApplicationState = {
  auth: AuthReducer;
  forms: FormsReducer;
  common: CommonReducer;
};
