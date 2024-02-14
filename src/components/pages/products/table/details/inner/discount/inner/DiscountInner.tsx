/* eslint-disable react/jsx-curly-newline */
/* eslint-disable implicit-arrow-linebreak */
import { Form, Input } from 'antd';
import React from 'react';
import ReactInputMask from 'react-input-mask';
import { useUpdateDiscountMutation } from 'src/services';
import { TDiscountRequest } from 'src/services/discount/discount.types';

const DiscountInner: React.FC<{
  id: number | undefined;
  price: number | undefined;
  discount: TDiscountRequest | undefined;
}> = ({ id, price, discount }) => {
  const [formValue, setFormValue] = React.useState<TDiscountRequest>({
    id: discount?.id,
    name: discount?.name,
    percent: discount?.percent,
    from: discount?.from,
    to: discount?.to,
  });
  const { mutate: updateDiscount } = useUpdateDiscountMutation(Number(id));

  const onFinish = (event: any) => {
    event.preventDefault();
    if (event) {
      updateDiscount(formValue);
    }
  };

  return (
    <div className="flex flex-col p-5">
      <form onSubmit={onFinish}>
        <Form.Item label="Название акции:">
          <Input
            className="w-full"
            value={formValue.name || '-'}
            onChange={(event) =>
              setFormValue({
                id: discount?.id,
                name: event.target.value,
                percent: formValue.percent,
                from: formValue.from,
                to: formValue.to,
              })
            }
          />
        </Form.Item>
        <Form.Item label="Процент:">
          <Input
            type="number"
            className="w-full"
            value={formValue.percent || '-'}
            onChange={(event) =>
              setFormValue({
                id: discount?.id,
                name: formValue.name,
                percent: Number(event.target.value),
                from: formValue.from,
                to: formValue.to,
              })
            }
          />
        </Form.Item>
        <Form.Item label="Итоговая сумма:">
          <Input
            className="w-full pointer-events-none"
            value={Number(Number(price) - (Number(price) / 100) * Number(formValue.percent)) || 0}
          />
        </Form.Item>
        <Form.Item label="Начинается:">
          <ReactInputMask
            mask="9999-99-99 99:99"
            placeholder="yyyy-mm-dd hh:mm"
            className="w-full border-2 py-1 px-3 rounded-lg"
            value={formValue.from}
            onChange={(event) =>
              setFormValue({
                id: discount?.id,
                name: formValue.name,
                percent: formValue.percent,
                from: event.target.value,
                to: formValue.to,
              })
            }
          />
        </Form.Item>
        <Form.Item label="Заканчивается:">
          <ReactInputMask
            mask="9999-99-99 99:99"
            placeholder="yyyy-mm-dd hh:mm"
            className="w-full border-2 py-1 px-3 rounded-lg"
            value={formValue.to}
            onChange={(event) =>
              setFormValue({
                id: discount?.id,
                name: formValue.name,
                percent: formValue.percent,
                from: formValue.from,
                to: event.target.value,
              })
            }
          />
        </Form.Item>
        <button className="bg-green-500 text-white px-10 py-2 rounded-lg transition-colors hover:bg-green-600">
          Изменить
        </button>
      </form>
    </div>
  );
};

export { DiscountInner };
