import React from 'react';
import { useGetDiscountQuery } from 'src/services';

import { DiscountInner } from './inner';

const Discount: React.FC<{ id: number | undefined; price: number | undefined }> = ({
  id,
  price,
}) => {
  const { data } = useGetDiscountQuery(Number(id));
  return data?.data.map((discount) => (
    <DiscountInner key={discount.id} discount={discount} id={id} price={price} />
  ));
};

export { Discount };
