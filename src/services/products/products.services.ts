import { api } from 'src/app';

import { TResponse } from '../index.types';

import { TProduct } from './products.types';

const url = 'products';

const axiosGetProducts = async (page: number): Promise<TResponse<TProduct>> => {
  const response = await api.get(url, { params: { page } });
  return response.data;
};

const axiosGetProduct = async (id: number): Promise<TProduct> => {
  const response = await api.get(`${url}/${id}`);
  return response.data;
};

const axiosPostProduct = async (value: TProduct): Promise<void> => {
  const response = await api.post(url, value);
  return response.data;
};

const axiosPutProduct = async (value: TProduct): Promise<void> => {
  const response = await api.put(`${url}/${value.id}`, value);
  return response.data;
};

const axiosDeleteProduct = async (id: number): Promise<void> => {
  const response = await api.delete(`${url}/${id}`);
  return response.data;
};

// eslint-disable-next-line object-curly-newline
export { axiosDeleteProduct, axiosGetProduct, axiosGetProducts, axiosPostProduct, axiosPutProduct };
