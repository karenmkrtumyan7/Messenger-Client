const configVariables = {
  baseURL: process.env.BASE_URL || 'http://localhost:8000',
};

const Config = {
  ...configVariables,
  xhr: {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json; charset=UTF-8',
    },
  },
};

export default Config;
