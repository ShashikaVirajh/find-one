import { httpMethods } from 'enums';
import { Http } from 'library';

import { endpoints } from 'constants/endpoints.constant';
import { versions } from 'enums';

class AuthHttp {
  static signUp = (payload: Object) =>
    Http.setMethod(httpMethods.post)
      .setAction(endpoints.SIGN_UP)
      .setData(payload)
      .setVersion(versions.V1)
      .request();

  static signIn = (payload: Object) =>
    Http.setMethod(httpMethods.post)
      .setAction(endpoints.SIGN_IN)
      .setData(payload)
      .setVersion(versions.V1)
      .request();

  static fetchAuthUser = (token: string) =>
    Http.setMethod(httpMethods.get)
      .setAction(endpoints.AUTH_USER)
      .setToken(token)
      .setVersion(versions.V1)
      .request();
}

export default AuthHttp;
