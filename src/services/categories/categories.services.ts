import { api } from 'src/app';

import { TResponse } from '../index.types';

import { TCategory } from './categories.types';

const axiosGetCategories = async (): Promise<TResponse<TCategory>> => {
  const response = await api.get('categories');
  return response.data;
};

export { axiosGetCategories };
