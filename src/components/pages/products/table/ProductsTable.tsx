import React from 'react';
import { CustomTable } from 'src/components';
import { useGetProductsQuery } from 'src/services';

import { useProductsColumn } from './useProductsColumn';

const ProductsTable: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading } = useGetProductsQuery(page);
  const columns = useProductsColumn();

  return (
    <CustomTable
      loading={isLoading}
      dataSource={data?.data}
      columns={columns}
      pagination={{
        current: page,
        onChange: (currentPage) => setPage(currentPage),
      }}
    />
  );
};

export { ProductsTable };
