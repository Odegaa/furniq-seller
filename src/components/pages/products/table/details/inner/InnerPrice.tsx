import { Form, Input } from 'antd';
import React from 'react';

const InnerPrice: React.FC<{ price: number | undefined }> = ({ price }) => (
  <Form.Item label="Цена:" className="px-5">
    <Input value={price || '-'} className="w-full pointer-events-none" />
  </Form.Item>
);

export { InnerPrice };
