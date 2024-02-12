import { Form, Input, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React from 'react';
import { CustomForm, CustomModal } from 'src/components';
import {
  useGetCategoriesQuery,
  useGetColorsQuery,
  useGetMaterialsQuery,
  useUpdateProductMutation,
} from 'src/services';
import { TCreateProductValues } from 'src/services/products/products.types';
import { useFormStorageStore } from 'src/store';

import { inputs, textareas } from './inputs';

const DetailsForm: React.FC = () => {
  const [form] = Form.useForm();
  const { toggleDrawer, paramsForm } = useFormStorageStore();
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

    form.resetFields();
    toggleDrawer();
  };

  React.useEffect(() => {
    console.log(paramsForm);

    if (paramsForm) {
      form.setFieldsValue({
        ...paramsForm.category_id,
        ...paramsForm.name.ru,
        ...paramsForm.name.latin,
        ...paramsForm.name.kiril,
        ...paramsForm.description.ru,
        ...paramsForm.description.kiril,
        ...paramsForm.description.latin,
        ...paramsForm.color_id,
        ...paramsForm.material_id,
        ...paramsForm.price,
        ...paramsForm.quantity,
      });
    }
  }, [form, paramsForm]);

  return (
    <CustomModal form={form} isLoading={isPendingUpdate}>
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
  );
};

export { DetailsForm };
