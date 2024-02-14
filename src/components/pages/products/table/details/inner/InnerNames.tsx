import { Form, Input } from 'antd';
import React from 'react';
import { TName } from 'src/services/index.types';

const InnerNames: React.FC<{ name: TName | undefined }> = ({ name }) => (
  <div className="flex flex-col p-5">
    <Form.Item label="Название (русский):">
      <Input className="w-full pointer-events-none" value={name?.ru || '-'} />
    </Form.Item>
    <Form.Item label="Название (каракалпакша):">
      <Input className="w-full pointer-events-none" value={name?.kiril || '-'} />
    </Form.Item>
    <Form.Item label="Название (qaraqalpaqsha):">
      <Input className="w-full pointer-events-none" value={name?.latin || '-'} />
    </Form.Item>
  </div>
);

export { InnerNames };
