import { TName } from '../index.types';

export type TProduct = {
  id: number;
  category_id: number;
  name: TName;
  price: number;
  description: TName;
  created_at: string;
  updated_at: string;
};

export type TUpdateProduct = {
  id: number;
  category_id: number;
  name: TName;
  price: number;
  description: TName;
};
