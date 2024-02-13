import { TName } from '../index.types';

export type TOrders = {
  id: number;
  user: TUser;
  payment_type: TPaymentType;
  status: TStatus;
  sum: number;
  products: TProduct[];
  created_at: string;
  updated_at: string;
};

export type TOrderShow = {
  data: {
    products: TProduct[];
  };
};

export type TUser = {
  id: number;
  name: string;
};

export type TPaymentType = {
  id: number;
  name: TName;
};

export type TStatus = {
  id: number;
  name: TName;
};

export type TProduct = {
  product_id: number;
  product_name: string;
  price: number;
  color: string;
  material: string;
  quantity: number;
};
