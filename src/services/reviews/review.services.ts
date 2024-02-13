import { api } from 'src/app';

import { TResponse } from '../index.types';

import { TReview, TReviewRequest } from './review.types';

const axiosGetReviews = async (id: number, page: number): Promise<TResponse<TReview>> => {
  const response = await api.get(`/products/${id}/reviews`, { params: { page } });
  return response.data;
};

const axiosPatchReview = async (id: number, value: TReviewRequest): Promise<void> => {
  const response = await api.patch(`/products/${id}/reviews/${value.id}`, value);
  return response.data;
};

export { axiosGetReviews, axiosPatchReview };
