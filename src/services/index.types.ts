export type TResponse<T> = {
  data: T[];
  pagination?: TPagination;
};

export type TPagination = {
  total: number;
};

export type TName = {
  latin: string;
  kiril: string;
  ru: string;
};
