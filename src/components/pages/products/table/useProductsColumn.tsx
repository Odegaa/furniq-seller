/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { ColumnsType } from 'antd/es/table';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Confirm } from 'src/components';
import { useDeleteProductMutation } from 'src/services';
import { TProduct } from 'src/services/products/products.types';
import { useFormStorageStore } from 'src/store';

function useProductsColumn() {
  const { setParamsForm } = useFormStorageStore();
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
      title: 'Русский',
      dataIndex: 'name',
      key: 'name',
      render: (_, product) => product.name.ru || '-',
    },
    {
      title: 'Каракалпакский',
      dataIndex: 'name',
      key: 'name',
      render: (_, product) => product.name.kiril || '-',
    },
    {
      title: 'Qaraqalpaqsha',
      dataIndex: 'name',
      key: 'name',
      render: (_, product) => product.name.latin || '-',
    },
    {
      title: 'Цена',
      dataIndex: 'price',
      key: 'price',
      render: (_, product) => product.price || '-',
    },
    {
      title: 'Действия',
      dataIndex: 'actions',
      key: 'actions',
      width: 100,
      render: (_, category) => (
        <div className="flex items-center justify-center gap-2">
          <span className="text-lg cursor-pointer" onClick={() => setParamsForm(category)}>
            <FaRegEdit />
          </span>
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
        </div>
      ),
    },
  ];
  return columns;
}

export { useProductsColumn };
