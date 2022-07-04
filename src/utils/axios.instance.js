import axios from 'axios';

// const defaultHeaders = {
//   authorization: `Bearer ${JSON.parse(localStorage.getItem('auth')) || {}}`,
// };

export const API = (baseUrl) => (
  axios.create({
    baseURL: baseUrl || 'http://localhost:8000/auth/',
  })
);

const authApi = API('http://localhost:8000/auth/');
const userApi = API('http://localhost:8000/users/');

const checkTokenInterceptor = (request) => {
  const authData = localStorage.getItem('auth');
  const token = authData ? JSON.parse(authData).token : null;
  const userId = authData ? JSON.parse(authData).userId : null;

  if (token) {
    request.headers.Authorization = `Bearer ${token}`;
    request.headers.userId = userId;
  }

  return request;
};

const responseSuccessInterceptor = (response) => response;
const responseFailureInterceptor = () => {
  // console.log(err);
  // localStorage.clear();
};
userApi.interceptors.request.use(checkTokenInterceptor);
userApi.interceptors.response.use(responseSuccessInterceptor, responseFailureInterceptor);

export {
  authApi,
  userApi,
};
