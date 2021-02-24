export type signInForm = {
  fields: string[];
  errors: {
    email: string[];
    password: string[];
  };
  values: {
    email: string;
    password: string;
  };
  formError?: string;
};

export type signUpForm = {
  fields: string[];
  errors: {
    firstName: string[];
    lastName: string[];
    email: string[];
    mobile: string[];
    password: string[];
    confirmPassword: string[];
  };
  values: {
    firstName: string;
    lastName: string;
    email?: string;
    mobile?: string;
    password?: string;
    confirmPassword?: string;
  };
  formError?: string;
};
