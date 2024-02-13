/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/jsx-curly-newline */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { ColumnsType } from 'antd/es/table';
import { CiEdit } from 'react-icons/ci';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { NavLink } from 'react-router-dom';
import { Confirm } from 'src/components';
import { useDeleteProductMutation, useGetCategoriesQuery } from 'src/services';
import { TProduct } from 'src/services/products/products.types';
import { useFormStorageStore } from 'src/store';

function useProductsColumn() {
  const { mutate: deleteProduct } = useDeleteProductMutation();
  const { data: categories } = useGetCategoriesQuery();
  const { setParamsForm } = useFormStorageStore();

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
      title: 'Категория',
      dataIndex: 'category_id',
      key: 'category_id',
      render: (_, product) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        categories?.data.map(
          (category) => category.id === product.category.id && category.name.ru,
        ) || '-',
    },
    {
      title: 'Действия',
      dataIndex: 'actions',
      key: 'actions',
      width: 100,
      render: (_, category) => (
        <div className="flex items-center justify-center gap-2">
          <span className="text-2xl cursor-pointer" onClick={() => setParamsForm(category)}>
            <CiEdit />
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
