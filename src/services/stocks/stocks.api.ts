/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  axiosDeleteStock,
  axiosGetAttributes,
  axiosGetAttributeValues,
  axiosPostStock,
} from './stock.services';
import { TStockRequest } from './stocks.types';

const useGetAttributesQuery = () =>
  useQuery({
    queryFn: axiosGetAttributes,
    queryKey: ['attributes'],
  });

const useGetAttributeValuesQuery = (id: number) =>
  useQuery({
    queryFn: () => axiosGetAttributeValues(id),
    queryKey: ['attribute-values', id],
  });

const useCreateStockMutation = (id: number) => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (values: TStockRequest) => axiosPostStock(id, values),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['attribute-values', id] });
      message.success('Успешно добавлен!');
    },
    onError: () => {
      message.error('Ошибка! Не добавлено!');
    },
  });
};

const useDeleteStockMutation = (id: number) => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (stockId: number) => axiosDeleteStock(id, stockId),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['products-stock', id] });
    },
  });
};

export {
  useCreateStockMutation,
  useDeleteStockMutation,
  useGetAttributesQuery,
  useGetAttributeValuesQuery,
};
