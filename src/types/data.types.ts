export type IHeaders = {
  'Content-Type': string;
  Authorization?: string;
};

export type IAction = {
  type?: string;
  payload?: any;
};

export type IEvent = {
  target: {
    name: string;
    value: string | number;
  };
  preventDefault?: Function;
};

export type ISaga = {
  type: string;
  payload?: any;
  success?: Function;
  failure?: Function;
};

export type IAuth = {
  token: string;
};

export type IDrawerItem = {
  key: string;
  icon: JSX.Element;
  text: string;
  screen: string;
  options: {};
};

export type IErrorResponse = {
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
