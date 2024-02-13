import { api } from 'src/app';

import { TResponse } from '../index.types';

import { TImages } from './image.types';

const axiosGetImages = async (id: number): Promise<TResponse<TImages>> => {
  const response = await api.get(`/products/${id}/images`);
  return response.data;
};

const axiosUploadImage = async (id: number, value: FormData): Promise<void> => {
  const response = await api.post(`/products/${id}/images`, value);
  return response.data;
};

const axiosDeleteImage = async (id: number, image_id: number): Promise<void> => {
  const response = await api.delete(`/products/${id}/images/${image_id}`);
  return response.data;
};

export { axiosDeleteImage, axiosGetImages, axiosUploadImage };
