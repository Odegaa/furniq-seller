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

export type TDetailsProduct = {
  data: TProduct;
};

export type TCreateProduct = {
  name: TName;
  description: TName;
  category_id: number;
  price: number;
};

export type TCreateProductValues = {
  category_id: number;
  latin: string;
  kiril: string;
  ru: string;
};

export type TUpdateProduct = {
  id: number;
  category_id: number;
  name: TName;
  price: number;
  description: TName;
};
