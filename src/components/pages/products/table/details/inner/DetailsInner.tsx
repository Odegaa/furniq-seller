import React from 'react';
import { TProduct } from 'src/services/products/products.types';

import { InnerCategory } from './InnerCategory';
import { InnerDescription } from './InnerDescription';
import { InnerNames } from './InnerNames';
import { InnerPrice } from './InnerPrice';

const DetailsInner: React.FC<{ data: TProduct | undefined }> = ({ data }) => (
  <div className="flex flex-col gap-5 p-5">
    <InnerNames name={data?.name} />
    <InnerDescription description={data?.description} />
    <InnerCategory category_id={data?.category_id} />
    <InnerPrice price={data?.price} />
  </div>
);

export { DetailsInner };
