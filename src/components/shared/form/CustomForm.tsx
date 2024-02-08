import { Form, FormInstance, FormProps } from 'antd';
import React from 'react';

interface IProps {
  form: FormInstance<any>;
  onFinish: (values: any) => void;
  children: React.ReactNode;
}
const CustomForm: React.FC<FormProps & IProps> = ({ form, onFinish, children }) => (
  <Form
    name="basic"
    form={form}
    labelCol={{ span: 30 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    layout="vertical"
    autoComplete="off"
    className="min-h-full"
  >
    {children}
  </Form>
);

export { CustomForm };
