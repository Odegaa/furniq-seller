import React from 'react';
import { CustomTable } from 'src/components';
import { useGetReviewsQuery } from 'src/services';

import { useReviewColumns } from './useReviewColumns';

const ReviewTable: React.FC<{ id: number | undefined }> = ({ id }) => {
  const [page, setPage] = React.useState(1);
  const { data, isLoading } = useGetReviewsQuery(Number(id), page);
  const columns = useReviewColumns();

  return (
    <CustomTable
      loading={isLoading}
      dataSource={data?.data}
      columns={columns}
      pagination={{
        current: page,
        onChange: (currentPage) => setPage(currentPage),
      }}
      className="shadow-xl"
    />
  );
};

export { ReviewTable };
