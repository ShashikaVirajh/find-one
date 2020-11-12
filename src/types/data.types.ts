export type Headers = {
  'Content-Type': string;
  Authorization?: string;
};

export type Action = {
  type?: string;
  payload?: any;
};

export type Event = {
  target: {
    name: string;
    value: string | number;
  };
  preventDefault?: Function;
};

export type Saga = {
  type: string;
  payload?: any;
  success?: Function;
  failure?: Function;
};

export type Auth = {
  token: string;
};

export type DrawerItem = {
  key: string;
  icon: JSX.Element;
  text: string;
  screen: string;
  options: {};
};

export type ErrorResponse = {
  headers: any;
  requestData: any;
  responseData: any;
  status: number | undefined;
};

export type AccordianItem = {
  id: string;
  question: string;
  answer: string;
};

export type User = {
  id: string;
  firstName: string;
  lastName: string;
  handle: string;
  email: string;
  mobile: string;
  role: string;
};
