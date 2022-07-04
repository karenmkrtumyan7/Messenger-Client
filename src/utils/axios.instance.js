import { AXIOS_API } from './axios';

class API extends AXIOS_API {
  static interceptorables = [];

  constructor(url, isInterceptorable) {
    super(url);
    this.isInterceptorable = isInterceptorable;

    if (isInterceptorable) {
      API.interceptorables.push(this);
    }
  }

  static checkTokenInterceptor = (request) => {
    const authData = localStorage.getItem('auth');
    const token = authData ? JSON.parse(authData).token : null;
    const userId = authData ? JSON.parse(authData).userId : null;

    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
      request.headers.userId = userId;
    }

    return request;
  };

  static responseSuccessInterceptor = (response) => response;

  static responseFailureInterceptor = (err) => {
    localStorage.clear();
    window.location.href = '/signin';
    return Promise.reject(err);
  };

  static connectInterceptors() {
    API.interceptorables.forEach((interceptorable) => {
      interceptorable.interceptors.request.use(API.checkTokenInterceptor);
      interceptorable.interceptors.response.use(API.responseSuccessInterceptor, API.responseFailureInterceptor);
    });
  }
}

const authApi = new API('http://localhost:8000/auth/', false);
const userApi = new API('http://localhost:8000/users/', true);

API.connectInterceptors();

export {
  authApi,
  userApi,
};
