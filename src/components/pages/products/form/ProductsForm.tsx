import { Form, Input, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import { ButtonForm, CustomForm, CustomModal } from 'src/components';
import {
  useCreateProductMutation,
  useGetCategoriesQuery,
  useGetColorsQuery,
  useGetMaterialsQuery,
  useUpdateProductMutation,
} from 'src/services';
import { TCreateProductValues } from 'src/services/products/products.types';
import { useFormStorageStore } from 'src/store';

import { inputs, textareas } from './inputs';

const ProductsForm: React.FC = () => {
  const [form] = Form.useForm();
  const { toggleDrawer, paramsForm } = useFormStorageStore();
  const { mutate: addProduct, isPending: isPendingCreate } = useCreateProductMutation();
  const { mutate: editProduct, isPending: isPendingUpdate } = useUpdateProductMutation();
  const { data: categories } = useGetCategoriesQuery();
  const { data: colors } = useGetColorsQuery();
  const { data: materials } = useGetMaterialsQuery();

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

    if (!paramsForm) {
      addProduct({
        category_id: values.category_id,
        name,
        description,
        color_id: values.color_id,
        material_id: values.material_id,
        price: values.price,
        quantity: values.quantity,
      });
    } else {
      editProduct({
        id: paramsForm.id,
        category_id: values.category_id,
        name,
        description,
        color_id: values.color_id,
        material_id: values.material_id,
        price: values.price,
        quantity: values.quantity,
      });
    }

    form.resetFields();
    toggleDrawer();
  };

  React.useEffect(() => {
    if (paramsForm) {
      form.setFieldsValue({
        ...paramsForm,
        category_id: paramsForm.category?.id,
        name_ru: paramsForm.name?.ru,
        name_kiril: paramsForm.name?.kiril,
        name_latin: paramsForm.name?.latin,
        description_ru: paramsForm.description.ru,
        description_latin: paramsForm.description.latin,
        description_kiril: paramsForm.description.kiril,
        color_id: paramsForm.color?.id,
        material_id: paramsForm.material?.id,
      });
    }
  }, [paramsForm, form]);

  return (
    <div className="flex justify-end px-5 pt-4">
      <ButtonForm toggleDrawer={toggleDrawer} />
      <CustomModal form={form} isLoading={paramsForm ? isPendingUpdate : isPendingCreate}>
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
          <Form.Item
            label="Цвет"
            name="color_id"
            required
            rules={[{ required: true, message: 'Пожалуйста выберите цвет!' }]}
          >
            <Select
              className="w-full"
              options={colors?.data.map((color) => ({
                label: color.name.ru,
                value: color.id,
              }))}
            />
          </Form.Item>
          <Form.Item
            label="Материал"
            name="material_id"
            required
            rules={[{ required: true, message: 'Пожалуйста выберите материал!' }]}
          >
            <Select
              className="w-full"
              options={materials?.data.map((material) => ({
                label: material.name.ru,
                value: material.id,
              }))}
            />
          </Form.Item>
          <Form.Item
            label="Цена"
            name="price"
            required
            rules={[{ required: true, message: 'Пожалуйста заполняйте поле, Цена!' }]}
          >
            <Input className="w-full" type="number" />
          </Form.Item>
          <Form.Item
            label="Количество"
            name="quantity"
            required
            rules={[{ required: true, message: 'Пожалуйста заполняйте поле, Количество!' }]}
          >
            <Input className="w-full" type="number" />
          </Form.Item>
        </CustomForm>
      </CustomModal>
    </div>
  );
};

export { ProductsForm };
