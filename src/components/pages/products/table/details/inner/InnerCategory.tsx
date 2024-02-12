import { Form, Input } from 'antd';
import React from 'react';
import { TCategory } from 'src/services/categories/categories.types';

const InnerCategory: React.FC<{ category: TCategory | undefined }> = ({ category }) => (
  <Form.Item label="Категория" className="flex flex-col px-5">
    <Input className="w-full pointer-events-none" value={category?.name.ru} />
  </Form.Item>
);

export { InnerCategory };
