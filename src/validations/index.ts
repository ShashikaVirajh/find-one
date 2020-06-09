import { parsePhoneNumberFromString } from 'libphonenumber-js';

import { PasswordErrorTypes, ValidationTypes } from 'enums';
import { ERRORS } from './validations.errors';
import { REGEXES } from './validations.regexes';

export const validate = (validations: any, value: any) =>
  validations
    .filter((validation: Object) => {
      if (!value && validation !== 'required') return false;

      switch (validation) {
        case ValidationTypes.required:
          return !required(value);
        case ValidationTypes.email:
          return !email(value);
        case ValidationTypes.mobile:
          return !mobile(value);
        case ValidationTypes.name:
          return !name(value);
        case ValidationTypes.number:
          return !number(value);
        case ValidationTypes.date:
          return !date(value);
        case ValidationTypes.password:
          return !password(value);
        default:
          return false;
      }
    })
    .map((error: string) => ERRORS[error]);

/** ------------------ VALIDATIONS ------------------ */

const required = (value: any) => value.replace(REGEXES.required, '') !== '';

const email = (value: any) => REGEXES.email.test(value);

const name = (value: any) => REGEXES.name.test(value);

const number = (value: any) => REGEXES.number.test(value);

const date = (value: any) => REGEXES.date.test(value);

const mobile = (value: string) => parsePhoneNumberFromString(value)?.isValid();

export const validatePassword = (value: string) => {
  const PASSWORD_ERRORS: string[] = [];

  if (!REGEXES.hasLowercase.test(value)) PASSWORD_ERRORS.push(PasswordErrorTypes.LOWERCASE);
  if (!REGEXES.hasUppercase.test(value)) PASSWORD_ERRORS.push(PasswordErrorTypes.UPPERCASE);
  if (!REGEXES.hasNumber.test(value)) PASSWORD_ERRORS.push(PasswordErrorTypes.NUMBER);
  if (!REGEXES.passwordLength.test(value)) PASSWORD_ERRORS.push(PasswordErrorTypes.LENGTH);
  if (!REGEXES.hasSymbol.test(value)) PASSWORD_ERRORS.push(PasswordErrorTypes.SYMBOL);

  return PASSWORD_ERRORS;
};
