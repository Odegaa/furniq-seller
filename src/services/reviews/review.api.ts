import { message } from 'antd';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { axiosGetReviews, axiosPatchReview } from './review.services';
import { TReviewRequest } from './review.types';

const useGetReviewsQuery = (id: number, page: number) =>
  // eslint-disable-next-line implicit-arrow-linebreak
  useQuery({
    queryFn: () => axiosGetReviews(id, page),
    queryKey: ['answer', id, page],
  });

const useAnswerReviewMutation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (value: TReviewRequest) => axiosPatchReview(id, value),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ['answer', id] });
      message.success(`${data}`);
    },
  });
};

export { useAnswerReviewMutation, useGetReviewsQuery };
