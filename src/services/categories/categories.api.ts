import { useQuery } from '@tanstack/react-query';

import { axiosGetCategories } from './categories.services';

const useGetCategoriesQuery = () =>
  // eslint-disable-next-line implicit-arrow-linebreak
  useQuery({
    queryFn: axiosGetCategories,
    queryKey: ['categories'],
  });

export { useGetCategoriesQuery };
