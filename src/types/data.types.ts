export interface IHeaders {
  'Content-Type': string;
  Authorization?: string;
}

export interface IAction {
  type?: string;
  payload?: any;
}

export interface IEvent {
  target: {
    name: string;
    value: string | number;
  };
  preventDefault?: Function;
}

export interface ISaga {
  type: string;
  payload?: any;
  success?: Function;
  failure?: Function;
}

export interface IAuth {
  token: string;
}

export interface IDrawerItem {
  key: string;
  icon: JSX.Element;
  text: string;
  screen: string;
  options: {};
}
