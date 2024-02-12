import { Form, Input } from 'antd';
import React from 'react';
import { TMaterial } from 'src/services/colors/color.types';

const InnerMaterial: React.FC<{ material: TMaterial | undefined }> = ({ material }) => (
  <Form.Item label="Материал (Русский):" className="flex flex-col px-5">
    <Input className="w-full pointer-events-none" value={material?.name.ru} />
  </Form.Item>
);

export { InnerMaterial };
