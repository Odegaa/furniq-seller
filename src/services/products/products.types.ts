import { TCategory } from '../categories/categories.types';
import { TColor, TMaterial } from '../colors/color.types';
import { TName } from '../index.types';

export type TProduct = {
  id: number;
  category: TCategory;
  name: TName;
  price: number;
  description: TName;
  quantity: number;
  number_sold: number;
  color: TColor;
  material_id: TMaterial;
};

export type TDetailsProduct = {
  data: TProduct;
};

export type TCreateProduct = {
  category_id: number;
  name: TName;
  description: TName;
  price: number;
  quantity: number;
  color_id: number;
  material_id: number;
};

export type TUpdateProduct = {
  id: number;
  category_id: number;
  name: TName;
  description: TName;
  price: number;
  quantity: number;
  color_id: number;
  material_id: number;
};

export type TCreateProductValues = {
  category_id: number;
  name_ru: string;
  name_kiril: string;
  name_latin: string;
  description_ru: string;
  description_kiril: string;
  description_latin: string;
  price: number;
  quantity: number;
  color_id: number;
  material_id: number;
};

export type TCreateInventory = {
  color: TName;
  material: TName;
  price: number;
  quantity: number;
};

export type TInvertory = {
  id: number;
  quantity: number;
  price: number;
  color: TName;
  material: TName;
};
