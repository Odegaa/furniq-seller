import { TName } from '../index.types';

export type TProduct = {
  id: number;
  category_id: number;
  name: TName;
  description: TName;
  inventory: TInvertory[];
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
  inventory: TInvertory[];
};

export type TCreateProductValues = {
  category_id: number;
  name_ru: string;
  name_kiril: string;
  name_latin: string;
  description_ru: string;
  description_kiril: string;
  description_latin: string;
  inventory: TCreateInventory[];
};

export type TCreateInventory = {
  color: TName;
  material: TName;
  price: number;
  quantity: number;
};

export type TUpdateProduct = {
  id: number;
  category_id: number;
  name: TName;
  price: number;
  description: TName;
};

export type TInvertory = {
  id: number;
  quantity: number;
  price: number;
  color: TName;
  material: TName;
};
