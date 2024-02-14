export type TDiscountResponse = {
  id: number;
  name: string;
  percent: number;
  sum: number | null;
  from: string;
  to: string;
  created_at: string;
  updated_at: string;
};

export type TDiscountRequest = {
  id?: number | undefined;
  name: string | undefined;
  percent: number | undefined;
  from: string | undefined;
  to: string | undefined;
};
