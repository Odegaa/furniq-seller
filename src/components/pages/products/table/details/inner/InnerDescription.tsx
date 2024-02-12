import { Form } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import { TName } from 'src/services/index.types';

const InnerDescription: React.FC<{ description: TName | undefined }> = ({ description }) => (
  <div className="flex flex-col p-5">
    <Form.Item label="Описание (русский):">
      <TextArea className="w-full pointer-events-none" value={description?.ru} />
    </Form.Item>
    <Form.Item label="Описание (каракалпакша):">
      <TextArea className="w-full pointer-events-none" value={description?.ru} />
    </Form.Item>
    <Form.Item label="Описание (qaraqalpaqsha):">
      <TextArea className="w-full pointer-events-none" value={description?.ru} />
    </Form.Item>
  </div>
);

export { InnerDescription };
