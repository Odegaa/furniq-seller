import { Form, Input } from 'antd';
import React from 'react';
import { TColor } from 'src/services/colors/color.types';

const InnerColor: React.FC<{ color: TColor | undefined }> = ({ color }) => (
  <Form.Item label="Цвет (Русский):" className="flex flex-col px-5">
    <Input value={color?.name.ru || '-'} className="w-full pointer-events-none" />
  </Form.Item>
);

export { InnerColor };
