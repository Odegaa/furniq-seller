import React from 'react';

const InnerPrice: React.FC<{ price: number | undefined }> = ({ price }) => (
  <p>
    <span className="font-bold">Цена: </span>
    <span>{price}</span>
  </p>
);

export { InnerPrice };
