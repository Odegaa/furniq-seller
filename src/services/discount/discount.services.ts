import { api } from 'src/app';

import { TResponse } from '../index.types';

import { TDiscountRequest, TDiscountResponse } from './discount.types';

const axiosGetDiscounts = async (id: number): Promise<TResponse<TDiscountResponse>> => {
  const response = await api.get(`products/${id}/discounts`);
  return response.data;
};

const axiosPostDiscount = async (id: number, value: TDiscountRequest): Promise<void> => {
  const response = await api.post(`products/${id}/discounts`, value);
  return response.data;
};

const axiosUpdateDiscount = async (id: number, value: TDiscountRequest): Promise<void> => {
  const response = await api.put(`products/${id}/discounts/${value.id}`, value);
  return response.data;
};

export { axiosGetDiscounts, axiosPostDiscount, axiosUpdateDiscount };
