import { api } from 'src/app';

import { TResponse } from '../index.types';

import { TColor, TMaterial } from './color.types';

const axiosGetColors = async (): Promise<TResponse<TColor>> => {
  const response = await api.get('v2/colors');
  return response.data;
};

const axiosGetMaterials = async (): Promise<TResponse<TMaterial>> => {
  const response = await api.get('/v2/materials');
  return response.data;
};

export { axiosGetColors, axiosGetMaterials };
