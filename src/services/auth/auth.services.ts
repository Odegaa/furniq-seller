import { api } from 'src/app';

import { TAuthResponse, TLoginRequest } from './auth.types';

const axiosLogin = async (values: TLoginRequest): Promise<TAuthResponse> => {
  const response = await api.post('login', values);
  return response.data;
};

export { axiosLogin };
