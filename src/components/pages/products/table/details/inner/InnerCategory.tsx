import React from 'react';
import { useGetCategoriesQuery } from 'src/services';

const InnerCategory: React.FC<{ category_id: number | undefined }> = ({ category_id }) => {
  const { data: categories } = useGetCategoriesQuery();
  return (
    <h1>
      <span className="font-bold">Категория: </span>
      <span>
        {categories?.data.map((category) => category.id === category_id && category?.name?.ru)}
      </span>
    </h1>
  );
};

export { InnerCategory };
