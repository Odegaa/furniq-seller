import { api } from 'src/app';

import { TResponse } from '../index.types';

// eslint-disable-next-line object-curly-newline
import { TCreateProduct, TDetailsProduct, TProduct, TUpdateProduct } from './products.types';

const url = 'products';

const axiosGetProducts = async (page: number): Promise<TResponse<TProduct>> => {
  const response = await api.get(url, { params: { page } });
  return response.data;
};

const axiosGetProduct = async (id: number): Promise<TDetailsProduct> => {
  const response = await api.get(`${url}/${id}`);
  return response.data;
};

const axiosPostProduct = async (value: TCreateProduct): Promise<void> => {
  const response = await api.post(url, value);
  return response.data;
};

const axiosPutProduct = async (value: TUpdateProduct): Promise<void> => {
  const response = await api.put(`${url}/${value.id}`, value);
  return response.data;
};

const axiosDeleteProduct = async (id: number): Promise<void> => {
  const response = await api.delete(`${url}/${id}`);
  return response.data;
};

// eslint-disable-next-line object-curly-newline
export { axiosDeleteProduct, axiosGetProduct, axiosGetProducts, axiosPostProduct, axiosPutProduct };
