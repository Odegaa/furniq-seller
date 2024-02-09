/* eslint-disable implicit-arrow-linebreak */
import { useQuery } from '@tanstack/react-query';

import { axiosGetColors, axiosGetMaterials } from './color.services';

const useGetColorsQuery = () =>
  useQuery({
    queryFn: axiosGetColors,
    queryKey: ['colors'],
  });

const useGetMaterialsQuery = () =>
  useQuery({
    queryFn: axiosGetMaterials,
    queryKey: ['materials'],
  });

export { useGetColorsQuery, useGetMaterialsQuery };
