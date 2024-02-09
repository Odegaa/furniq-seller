import { Form, Input, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import { ButtonForm, CustomForm, CustomModal } from 'src/components';
import { useCreateProductMutation, useGetCategoriesQuery } from 'src/services';
import { TCreateProductValues } from 'src/services/products/products.types';
import { useFormStorageStore } from 'src/store';

import { inputs, textareas } from './inputs';

const ProductsForm: React.FC = () => {
  const [form] = Form.useForm();
  const { toggleDrawer } = useFormStorageStore();
  const { mutate: addProduct, isPending: isPendingCreate } = useCreateProductMutation();
  const { data: categories } = useGetCategoriesQuery();

  const onFinish = (values: TCreateProductValues) => {
    const name = {
      ru: values.name_ru,
      kiril: values.name_kiril,
      latin: values.name_latin,
    };

    const description = {
      ru: values.description_ru,
      kiril: values.description_kiril,
      latin: values.description_latin,
    };

    console.log({ category_id: values.category_id, name, description });

    // addProduct({
    //   category_id: values.category_id,
    //   name,
    //   description,
    //   inventory: {},
    // });

    form.resetFields();
    toggleDrawer();
  };

  return (
    <div className="flex justify-end px-5 pt-4">
      <ButtonForm toggleDrawer={toggleDrawer} />
      <CustomModal form={form} isLoading={isPendingCreate}>
        <CustomForm form={form} onFinish={onFinish}>
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
          {textareas.map(({ key, name, rules }) => (
            <Form.Item
              key={key}
              label={name}
              name={key}
              required
              rules={[{ required: true, message: `Пожалуйста заполняйте поле, ${rules}!` }]}
            >
              <TextArea className="w-full" />
            </Form.Item>
          ))}
        </CustomForm>
      </CustomModal>
    </div>
  );
};

export { ProductsForm };
