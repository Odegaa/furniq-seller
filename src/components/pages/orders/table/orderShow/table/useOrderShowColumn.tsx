import { ColumnsType } from 'antd/es/table';
import { TProduct } from 'src/services/orders/orders.types';

function useOrderShowColumn() {
  const columns: ColumnsType<TProduct> = [
    {
      title: '№',
      dataIndex: 'index',
      key: 'index',
      render: (_, _r, index) => index + 1,
      width: 100,
    },
    {
      title: 'Название товара',
      dataIndex: 'name',
      key: 'name',
      render: (_, render) => render.product_name,
    },
    {
      title: 'Цвет',
      dataIndex: 'color',
      key: 'color',
      render: (_, render) => render.color,
    },
    {
      title: 'Материал',
      dataIndex: 'material',
      key: 'material',
      render: (_, render) => render.material,
    },
    {
      title: 'Количество',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (_, render) => render.quantity,
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
      render: (_, render) => render.price,
    },
  ];
  return columns;
}

export { useOrderShowColumn };
