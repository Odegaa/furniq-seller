import { Form, Input } from 'antd';
import React from 'react';

const InnerQuantities: React.FC<{
  quantity: number | undefined;
  number_sold: number | undefined;
}> = ({ number_sold, quantity }) => (
  <>
    <Form.Item label="Количество оставшихся:" className="px-5">
      <Input className="w-full pointer-events-none" value={quantity || '-'} />
    </Form.Item>
    <Form.Item label="Количество проданных:" className="px-5">
      <Input className="w-full pointer-events-none" value={number_sold || '-'} />
    </Form.Item>
  </>
);

export { InnerQuantities };
