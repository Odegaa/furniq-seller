import { ColumnsType } from 'antd/es/table';
import { FaExternalLinkAlt } from 'react-icons/fa';
import {} from 'react-icons/fa6';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { Confirm } from 'src/components';
import { useDeleteProductMutation } from 'src/services';
import { TProduct } from 'src/services/products/products.types';

function useProductsColumn() {
  const { mutate: deleteProduct } = useDeleteProductMutation();

  const columns: ColumnsType<TProduct> = [
    {
      title: '№',
      dataIndex: 'index',
      key: 'index',
      render: (_, _r, index) => index + 1,
      width: 100,
    },
    {
      title: 'Название (русский)',
      dataIndex: 'name',
      key: 'name',
      render: (_, product) => product.name.ru || '-',
    },
    {
      title: 'Название (каракалпакский)',
      dataIndex: 'name',
      key: 'name',
      render: (_, product) => product.name.kiril || '-',
    },
    {
      title: 'Название (qaraqalpaqsha)',
      dataIndex: 'name',
      key: 'name',
      render: (_, product) => product.name.latin || '-',
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
      render: (_, product) => product.price || '-',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Действия',
      dataIndex: 'actions',
      key: 'actions',
      width: 100,
      render: (_, category) => (
        <div className="flex items-center justify-center gap-2">
          <Confirm
            title="Удалить"
            description="Вы действительно хотите удалить?"
            onConfirm={() => deleteProduct(Number(category.id))}
            okText="Удалить"
            cancelText="Отмена"
            okType="danger"
          >
            <span className="text-xl cursor-pointer">
              <RiDeleteBin6Line />
            </span>
          </Confirm>
          <NavLink to={`${category.id}`} className="text-lg cursor-pointer hover:text-black">
            <FaExternalLinkAlt />
          </NavLink>
        </div>
      ),
    },
  ];
  return columns;
}

export { useProductsColumn };
