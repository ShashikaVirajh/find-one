export const REGEXES = {
  required: /\s/g,
  email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  name: /^[a-zA-Z \-]+$/,
  date: /^\d{4}[-]\d{2}[-]\d{2}/,
  currency: /^[0-9]+(\.[0-9]{1,2})?$/,
  passwordLength: /^.{8,20}$/,
  hasNumber: /[0-9]/,
  hasLowercase: /[a-z]/,
  hasUppercase: /[A-Z]/,
  hasSymbol: /[!@#$%^&*]/,
};
