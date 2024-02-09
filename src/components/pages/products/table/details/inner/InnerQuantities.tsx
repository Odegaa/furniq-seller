import React from 'react';

const InnerQuantities: React.FC<{
  quantity: number | undefined;
  number_sold: number | undefined;
}> = ({ number_sold, quantity }) => (
  <>
    <div>
      <span>Количество оставшихся: </span>
      <span>{quantity}</span>
    </div>
    <div>
      <span>Количество проданных: </span>
      <span>{number_sold}</span>
    </div>
  </>
);

export { InnerQuantities };
