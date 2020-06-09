export type signInForm = {
  fields: string[];
  errors: {};
  values: {
    email: string;
    password: string;
  };
};

export type signUpForm = {
  fields: string[];
  errors: {};
  values: {
    firstName: string;
    lastName: string;
    email: string;
    mobile: string;
    password: string;
    confirmPassword: string;
  };
};
