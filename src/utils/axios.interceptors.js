import axios from 'axios';
import LocalStorageService from '../services/localStorage.service';

const responseSuccessInterceptor = (response) => response;
const responseFailureInterceptor = (error) => {
  if (error.response.status === 401 && LocalStorageService.get('auth')) {
    LocalStorageService.clear();
    window.location.href = '/signin';
  }
  return Promise.reject(error);
};

axios.interceptors.response.use(
  responseSuccessInterceptor,
  responseFailureInterceptor,
);

export default axios;
