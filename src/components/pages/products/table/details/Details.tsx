import { Spin } from 'antd';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Section } from 'src/components';
import { useGetProductByIdQuery } from 'src/services';

import { DetailsInner } from './inner';

const Details: React.FC = () => {
  const { id } = useParams();
  const { data: product, isLoading } = useGetProductByIdQuery(Number(id));

  return (
    <Section>
      {isLoading ? (
        <div className="flex items-center text-center justify-center py-60">
          <Spin size="large" />
        </div>
      ) : (
        <DetailsInner data={product?.data} />
      )}
    </Section>
  );
};

export { Details };
