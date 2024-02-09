import { TName } from '../index.types';

export type TAtributes = {
  id: number;
  name: string;
};

export type TValue = {
  id: number;
  name: TName;
};

export type TStockRequest = {
  quantity: number;
  price: number;
  attributes: TAttributesById[];
};

export type TAttributesById = {
  attribute_id: number;
  value_id: number;
};
