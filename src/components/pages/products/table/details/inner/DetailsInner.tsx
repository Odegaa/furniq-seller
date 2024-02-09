import React from 'react';
import { TProduct } from 'src/services/products/products.types';

import { InnerCategory } from './InnerCategory';
import { InnerDescription } from './InnerDescription';
import { InnerNames } from './InnerNames';
import { Stock } from './stocks';

const DetailsInner: React.FC<{ data: TProduct | undefined }> = ({ data }) => (
  <div className="flex flex-col gap-20 p-5">
    <div className="flex gap-5">
      <InnerNames name={data?.name} />
      <InnerDescription description={data?.description} />
      <InnerCategory category_id={data?.category_id} />
    </div>
    <Stock data={data?.inventory} />
  </div>
);

export { DetailsInner };
