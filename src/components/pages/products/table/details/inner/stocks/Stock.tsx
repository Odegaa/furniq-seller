import React from 'react';
import { TInvertory } from 'src/services/products/products.types';

const Stock: React.FC<{ data: TInvertory[] | undefined }> = ({ data }) => {
  const res = '';
  return (
    <div className="flex w-full flex-col gap-5">
      <div key={data[0]?.id} className="border-2 border-black p-5 rounded-xl flex flex-col gap-5">
        <h1 className="max-w-80 flex gap-5 items-center">
          <span className="text-lg font-semibold">Цвет: </span>
          <select className="border-2 border-black p-2 rounded-lg max-w-52 w-full">
            {data[0]?.color.ru}
          </select>
        </h1>
        <h2>
          <span>Материал: </span>
          <span>{data[0]?.material.ru}</span>
        </h2>
        <h3>
          <span>Цена: </span>
          <span>{data[0]?.price}</span>
        </h3>
        <h4>
          <span>Количество: </span>
          <span>{data[0]?.quantity}</span>
        </h4>
      </div>
    </div>
  );
};

export { Stock };
