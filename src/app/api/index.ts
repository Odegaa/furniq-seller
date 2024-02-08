// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

import { BASE_URL } from '../config';

const api = axios.create({ baseURL: BASE_URL });
const authInterceptor = (config: any) => {
  config.headers.authorization = `Bearer ${
    JSON.parse(`${localStorage.getItem('token')}`).state.token
  }`;
  return config;
};

api.interceptors.request.use(authInterceptor);
export { api };
