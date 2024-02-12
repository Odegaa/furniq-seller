import { Form } from 'antd';
import React from 'react';
import { ButtonForm } from 'src/components';
import { TProduct } from 'src/services/products/products.types';
import { useFormStorageStore } from 'src/store';

import { InnerCategory } from './InnerCategory';
import { InnerColor } from './InnerColor';
import { InnerDescription } from './InnerDescription';
import { InnerImage } from './InnerImage';
import { InnerMaterial } from './InnerMaterial';
import { InnerNames } from './InnerNames';
import { InnerPrice } from './InnerPrice';
import { InnerQuantities } from './InnerQuantities';

const DetailsInner: React.FC<{ data: TProduct | undefined }> = ({ data }) => {
  const { toggleDrawer, setParamsForm } = useFormStorageStore();

  const handleClick = () => {
    toggleDrawer();
    setParamsForm(data);
  };

  return (
    <div className="flex flex-col items-center md:items-start md:flex-row w-full p-5">
      <div className="flex-1">
        <div className="flex items-end gap-5 justify-between px-5 md:px-10">
          <InnerImage />
          <div className="flex items-center gap-2">
            <button
              onClick={toggleDrawer}
              className="py-2 px-10 rounded-lg text-white bg-slate-500 transition-colors hover:bg-slate-600"
            >
              добавить фотографию
            </button>
            <ButtonForm toggleDrawer={handleClick} edit />
          </div>
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
      </div>
      <div className="max-w-[500px] w-full border-2 border-gray-700 rounded-lg">HELLO</div>
    </div>
  );
};

export { DetailsInner };
