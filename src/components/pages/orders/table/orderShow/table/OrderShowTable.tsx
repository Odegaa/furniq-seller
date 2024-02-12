import React from 'react';
import { useParams } from 'react-router-dom';
import { CustomTable } from 'src/components';
import { useGetOrderByIdQuery } from 'src/services';

import { useOrderShowColumn } from './useOrderShowColumn';

const OrderShowTable: React.FC = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetOrderByIdQuery(Number(id));
  const columns = useOrderShowColumn();

  return <CustomTable loading={isLoading} dataSource={data?.products} columns={columns} />;
};

export { OrderShowTable };
