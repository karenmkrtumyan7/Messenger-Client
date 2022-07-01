import axios from 'axios';

const defaultHeaders = {
  authorization: `Bearer ${JSON.parse(localStorage.getItem('auth')) || {}}`,
};

export const authApi = (baseUrl, headers = defaultHeaders) => (
  axios.create({
    baseURL: baseUrl || 'http://localhost:8000/auth/',
    headers,
  })
);

export const userApi = (baseUrl, headers = defaultHeaders) => (
  axios.create({
    baseURL: baseUrl || 'http://localhost:8000/users/',
    headers,
  })
);
