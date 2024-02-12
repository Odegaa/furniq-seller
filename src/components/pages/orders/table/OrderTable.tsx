import React from 'react';
import { CustomTable } from 'src/components';
import { useGetOrdersQuery } from 'src/services';

import { useOrdersColumn } from './useOrdersColumn';

const OrdersTable: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading } = useGetOrdersQuery(page);
  const columns = useOrdersColumn();

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

export { OrdersTable };
