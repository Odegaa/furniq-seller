/* eslint-disable implicit-arrow-linebreak */
import { useQuery } from '@tanstack/react-query';

import { axiosGetOrderById, axiosGetOrders } from './orders.services';

const useGetOrdersQuery = (page: number) =>
  useQuery({
    queryFn: () => axiosGetOrders(page),
    queryKey: ['orders', page],
  });

const useGetOrderByIdQuery = (id: number) =>
  useQuery({
    queryFn: () => axiosGetOrderById(id),
    queryKey: ['orders', id],
  });

export { useGetOrderByIdQuery, useGetOrdersQuery };
