/* eslint-disable implicit-arrow-linebreak */
import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  axiosDeleteProduct,
  axiosGetProduct,
  axiosGetProducts,
  axiosPostProduct,
  axiosPutProduct,
} from './products.services';
import { TCreateProduct, TProduct, TUpdateProduct } from './products.types';

const key = 'products';

const useGetProductsQuery = (page: number) =>
  useQuery({
    queryFn: () => axiosGetProducts(page),
    queryKey: [key],
  });

const useGetProductByIdQuery = (id: number) =>
  useQuery({
    queryFn: () => axiosGetProduct(id),
    queryKey: [key, id],
  });

const useCreateProductMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (value: TCreateProduct) => axiosPostProduct(value),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [key] });
      message.success('Успешно добавлен!');
    },
  });
};

const useUpdateProductMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (value: TUpdateProduct) => axiosPutProduct(value),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [key] });
      message.success('Успешно изменен!');
    },
  });
};

const useDeleteProductMutation = () => {
  const client = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => axiosDeleteProduct(id),
    onSuccess: () => {
      client.invalidateQueries({ queryKey: [key] });
      message.success('Успешно удален!');
    },
  });
};

export {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetProductByIdQuery,
  useGetProductsQuery,
  useUpdateProductMutation,
};
