import { api } from 'src/app';

import { TResponse } from '../index.types';

import { TOrders, TOrderShow } from './orders.types';

const axiosGetOrders = async (page: number): Promise<TResponse<TOrders>> => {
  const response = await api.get('orders', { params: { page } });
  return response.data;
};

const axiosGetOrderById = async (id: number): Promise<TOrderShow> => {
  const response = await api.get(`orders/${id}`);
  return response.data;
};

export { axiosGetOrderById, axiosGetOrders };
