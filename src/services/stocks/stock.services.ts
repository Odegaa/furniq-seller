import { api } from 'src/app';

import { TResponse } from '../index.types';

import { TAtributes, TStockRequest, TValue } from './stocks.types';

const axiosGetAttributes = async (): Promise<TResponse<TAtributes>> => {
  const response = await api.get('attributes');
  return response.data;
};

const axiosGetAttributeValues = async (id: number): Promise<TResponse<TValue>> => {
  const response = await api.get(`attributes/${id}/values`);
  return response.data;
};

const axiosPostStock = async (id: number, values: TStockRequest): Promise<void> => {
  const response = await api.post(`attributes/${id}/values`, values);
  return response.data;
};

const axiosDeleteStock = async (id: number, stockId: number): Promise<void> => {
  const response = await api.delete(`/products/${id}/stocks/${stockId}`);
  return response.data;
};

// eslint-disable-next-line object-curly-newline
export { axiosDeleteStock, axiosGetAttributes, axiosGetAttributeValues, axiosPostStock };
