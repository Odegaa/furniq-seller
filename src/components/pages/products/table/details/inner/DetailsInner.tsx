import { Form } from 'antd';
import React from 'react';
import { TProduct } from 'src/services/products/products.types';

import { Discount } from './discount';
import { ImageForm } from './imageForm';
import { InnerCategory } from './InnerCategory';
import { InnerColor } from './InnerColor';
import { InnerDescription } from './InnerDescription';
import { InnerImage } from './InnerImage';
import { InnerMaterial } from './InnerMaterial';
import { InnerNames } from './InnerNames';
import { InnerPrice } from './InnerPrice';
import { InnerQuantities } from './InnerQuantities';
import { Review } from './reviews';

const DetailsInner: React.FC<{ data: TProduct | undefined }> = ({ data }) => (
  <div className="flex flex-col gap-5 w-full p-5">
    <div className="border-b-2 pb-3">
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5 justify-center px-5 md:px-10">
        <InnerImage id={data?.id} />
        <ImageForm id={data?.id} />
      </div>
      <Form name="name" labelCol={{ span: 30 }} layout="vertical" className="min-h-full w-full">
        <InnerNames name={data?.name} />
        <InnerDescription description={data?.description} />
        <InnerCategory category={data?.category} />
        <InnerColor color={data?.color} />
        <InnerMaterial material={data?.material_id} />
        <InnerQuantities number_sold={data?.number_sold} quantity={data?.quantity} />
        <InnerPrice price={data?.price} />
      </Form>
      <Discount id={data?.id} price={data?.price} />
    </div>
    <Review id={data?.id} />
  </div>
);

export { DetailsInner };
