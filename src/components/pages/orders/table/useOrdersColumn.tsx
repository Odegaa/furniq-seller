import { ColumnsType } from 'antd/es/table';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { TOrders } from 'src/services/orders/orders.types';

function useOrdersColumn() {
  const columns: ColumnsType<TOrders> = [
    {
      title: '№',
      dataIndex: 'index',
      key: 'index',
      render: (_, _r, index) => index + 1,
      width: 100,
    },
    {
      title: 'Клиенты',
      dataIndex: 'name',
      key: 'name',
      render: (_, order) => order.user.name || '-',
    },
    {
      title: 'Тип оплаты',
      dataIndex: 'payment_type',
      key: 'payment_type',
      render: (_, order) => order.payment_type.name.ru || '-',
    },
    {
      title: 'Статус',
      dataIndex: 'status',
      key: 'status',
      render: (_, order) => order.status.name.ru || '-',
    },
    {
      title: 'Сумма',
      dataIndex: 'sum',
      key: 'sum',
      render: (_, order) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'UZS' }).format(
          Number(order.sum),
        ) || '-',
    },
    {
      title: 'Время покупки',
      dataIndex: 'created_at',
      key: 'created_at',
      render: (_, render) => render.created_at,
    },
    {
      title: 'Действия',
      dataIndex: 'actions',
      key: 'actions',
      width: 100,
      render: (_, order) => (
        <div className="flex items-center justify-center gap-2">
          <NavLink to={`${order.id}`} className="text-lg cursor-pointer hover:text-black">
            <FaExternalLinkAlt />
          </NavLink>
        </div>
      ),
    },
  ];

  return columns;
}

export { useOrdersColumn };
