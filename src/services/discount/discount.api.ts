import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { axiosGetDiscounts, axiosPostDiscount, axiosUpdateDiscount } from './discount.services';
import { TDiscountRequest } from './discount.types';

const useGetDiscountQuery = (id: number) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  useQuery({
    queryFn: () => axiosGetDiscounts(id),
    queryKey: ['discounts'],
  });

const useCreateDiscountMutation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (value: TDiscountRequest) => axiosPostDiscount(id, value),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['discounts', id] });
      message.success('Успешно добавлено');
    },
  });
};

const useUpdateDiscountMutation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (value: TDiscountRequest) => axiosUpdateDiscount(id, value),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['discounts', id] });
      message.success('Успешно изменено');
    },
  });
};

export { useCreateDiscountMutation, useGetDiscountQuery, useUpdateDiscountMutation };
