import axios from 'axios';

export class AXIOS_API {
  constructor(url) {
    return axios.create({
      baseURL: url || 'http://localhost:8000/auth/',
    });
  }
}
