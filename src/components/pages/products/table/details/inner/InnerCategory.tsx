import React from 'react';
import { TCategory } from 'src/services/categories/categories.types';

const InnerCategory: React.FC<{ category: TCategory | undefined }> = ({ category }) => (
  <h1>
    <span className="font-bold">Категория: </span>
    <span>{category?.name.ru}</span>
  </h1>
);

export { InnerCategory };
