import axios from 'axios';
import LocalStorageService from '../services/localStorage.service';

const responseSuccessInterceptor = (response) => response;
const responseFailureInterceptor = (err) => {
  LocalStorageService.clear();
  // window.location.href = '/signin';
  return Promise.reject(err);
};

axios.interceptors.response.use(
  responseSuccessInterceptor,
  responseFailureInterceptor,
);

export default axios;
