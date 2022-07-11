import Config from '../config';
import axios from '../utils/axios.interceptors';
import LocalStorageService from './localStorage.service';
import { AppConstants } from '../constants/app.constants';

const NetworkService = {
  makeAPIGetRequest: (partUrl, options = {}) => NetworkService.makeAPIRequest(partUrl, {
    ...options,
    method: AppConstants.methods.GET,
  }),

  makeAPIPostRequest: (partUrl, options = {}) => NetworkService.makeAPIRequest(partUrl, {
    ...options,
    method: AppConstants.methods.POST,
  }),

  makeAPIPutRequest: (partUrl, options = {}) => NetworkService.makeAPIRequest(partUrl, {
    ...options,
    method: AppConstants.methods.PUT,
  }),

  makeAPIDeleteRequest: (partUrl, options = {}) => NetworkService.makeAPIRequest(partUrl, {
    ...options,
    method: AppConstants.methods.DELETE,
  }),

  makeAPIPatchRequest: (partUrl, options = {}) => NetworkService.makeAPIRequest(partUrl, {
    ...options,
    method: AppConstants.methods.PATCH,
  }),

  generateUrl: (arg) => (Array.isArray(arg) ? [...arg].join('/') : `/${arg}`),

  makeAPIRequest: (partUrl, options) => {
    const url = NetworkService.generateUrl(partUrl);
    const baseURL = options.baseURL || Config.baseURL;
    const auth = LocalStorageService.get('auth');
    const authorization = auth && auth.access_token
      ? {
        Authorization: `Bearer ${auth.access_token}`,
      }
      : null;

    return axios({
      ...options,
      baseURL,
      url,
      headers: {
        ...Config.xhr.headers,
        ...authorization,
        ...options.headers,
      },
    });
  },
};

export default NetworkService;
