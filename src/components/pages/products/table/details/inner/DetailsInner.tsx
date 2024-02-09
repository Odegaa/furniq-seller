import React from 'react';
import noImage from 'src/app/assets/noImage.jpg';
import { TProduct } from 'src/services/products/products.types';

import { InnerCategory } from './InnerCategory';
import { InnerColor } from './InnerColor';
import { InnerDescription } from './InnerDescription';
import { InnerMaterial } from './InnerMaterial';
import { InnerNames } from './InnerNames';
import { InnerPrice } from './InnerPrice';
import { InnerQuantities } from './InnerQuantities';

const DetailsInner: React.FC<{ data: TProduct | undefined }> = ({ data }) => (
  <div className="flex gap-20">
    <div className="max-w-80 w-full">
      <img src={noImage} alt="noImage" />
    </div>
    <div className="flex flex-col gap-10 p-5">
      <InnerNames name={data?.name} />
      <InnerDescription description={data?.description} />
      <InnerCategory category={data?.category} />
      <InnerPrice price={data?.price} />
      <InnerColor color={data?.color} />
      <InnerMaterial material_id={data?.material_id} />
      <InnerQuantities number_sold={data?.number_sold} quantity={data?.quantity} />
    </div>
  </div>
);

export { DetailsInner };
