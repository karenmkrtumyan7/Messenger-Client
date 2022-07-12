import axios from 'axios';
import LocalStorageService from '../services/localStorage.service';
import { NavigationService } from '../services/navigationService';

const responseSuccessInterceptor = (response) => response;
const responseFailureInterceptor = (error) => {
  if (error.response.status === 401 && LocalStorageService.get('auth')) {
    LocalStorageService.clear();
    NavigationService('/signin');
  }
  return Promise.reject(error);
};

axios.interceptors.response.use(
  responseSuccessInterceptor,
  responseFailureInterceptor,
);

export default axios;
