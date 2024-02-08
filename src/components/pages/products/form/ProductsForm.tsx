import { Form, Input, Select } from 'antd';
import React from 'react';
import { ButtonForm, CustomDrawer, CustomForm } from 'src/components';
import {
  useCreateProductMutation,
  useGetCategoriesQuery,
  useUpdateProductMutation,
} from 'src/services';
import { TProduct } from 'src/services/products/products.types';
import { useFormStorageStore } from 'src/store';

import { inputs } from './inputs';

const ProductsForm: React.FC = () => {
  const [form] = Form.useForm();
  const { paramsForm, toggleDrawer } = useFormStorageStore();
  const { mutate: addProduct, isPending: isPendingCreate } = useCreateProductMutation();
  const { mutate: updateProduct, isPending: isPendingUpdate } = useUpdateProductMutation();
  const { data: categories } = useGetCategoriesQuery();

  const onFinish = (values: TProduct) => {
    console.log(values);

    // if (!paramsForm) {
    //   addProduct({ name: values });
    // } else {
    //   updateProduct({ id: paramsForm.id, name: values });
    // }
    form.resetFields();
    toggleDrawer();
  };

  const handleChange = () => {};

  React.useEffect(() => {
    if (paramsForm) form.setFieldsValue({ ...paramsForm.name });
  }, [form, paramsForm]);

  return (
    <div className="flex justify-end px-5 pt-4">
      <ButtonForm toggleDrawer={toggleDrawer} />
      <CustomDrawer form={form} isLoading={paramsForm ? isPendingUpdate : isPendingCreate}>
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
            label="Цена"
            name="price"
            required
            rules={[{ required: true, message: 'Пожалуйста укажите цену на товар!' }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Категория"
            name="category_id"
            required
            rules={[{ required: true, message: 'Пожалуйста выберите категорию!' }]}
          >
            <Select
              defaultValue="Выберите категорию"
              className="w-full"
              onChange={handleChange}
              options={categories?.data.map((category) => ({
                text: category.name.ru,
                value: category.name.ru,
              }))}
            />
          </Form.Item>
        </CustomForm>
      </CustomDrawer>
    </div>
  );
};

export { ProductsForm };
