import { Form, Input, Select } from 'antd';
import React from 'react';
import { ButtonForm, CustomDrawer, CustomForm } from 'src/components';
import { useCreateProductMutation, useGetCategoriesQuery } from 'src/services';
import { TCreateProductValues } from 'src/services/products/products.types';
import { useFormStorageStore } from 'src/store';

import { inputs } from './inputs';

const ProductsForm: React.FC = () => {
  const [form] = Form.useForm();
  const { toggleDrawer } = useFormStorageStore();
  const { mutate: addProduct, isPending: isPendingCreate } = useCreateProductMutation();
  const { data: categories } = useGetCategoriesQuery();

  const onFinish = (values: TCreateProductValues) => {
    const name = {
      ru: values.ru,
      kiril: values.kiril,
      latin: values.latin,
    };

    addProduct({
      category_id: values.category_id,
      name,
      description: { kiril: '', latin: '', ru: '' },
      price: 0,
    });
    form.resetFields();
    toggleDrawer();
  };

  return (
    <div className="flex justify-end px-5 pt-4">
      <ButtonForm toggleDrawer={toggleDrawer} />
      <CustomDrawer form={form} isLoading={isPendingCreate}>
        <CustomForm form={form} onFinish={onFinish}>
          {inputs.map(({ key, name, rules }) => (
            <Form.Item
              key={key}
              label={name}
              name={key}
              required
              rules={[{ required: true, message: `Пожалуйста заполняйте поле, ${rules}!` }]}
            >
              <Input className="w-full" />
            </Form.Item>
          ))}
          <Form.Item
            label="Категория"
            name="category_id"
            required
            rules={[{ required: true, message: 'Пожалуйста выберите категорию!' }]}
          >
            <Select
              className="w-full"
              options={categories?.data.map((category) => ({
                label: category.name.ru,
                value: category.id,
              }))}
            />
          </Form.Item>
        </CustomForm>
      </CustomDrawer>
    </div>
  );
};

export { ProductsForm };
