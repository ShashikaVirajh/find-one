import { httpMethods } from 'enums';
import { Http } from 'library';

import * as Endpoints from 'constants/endpoints.constant';

class AuthHttp {
  static signUp = (payload: Object) =>
    Http.setMethod(httpMethods.post).setUrl(Endpoints.SIGN_UP).setData(payload).request();

  static signIn = (payload: Object) =>
    Http.setMethod(httpMethods.post).setUrl(Endpoints.SIGN_IN).setData(payload).request();

  static fetchAuthUser = (token: string) =>
    Http.setMethod(httpMethods.get).setUrl(Endpoints.AUTH_USER).setToken(token).request();
}

export default AuthHttp;
