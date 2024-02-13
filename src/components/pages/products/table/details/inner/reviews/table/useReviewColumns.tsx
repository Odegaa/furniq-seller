/* eslint-disable jsx-a11y/control-has-associated-label */
import { ColumnsType } from 'antd/es/table';
import { FaEdit } from 'react-icons/fa';
import { TReview } from 'src/services/reviews/review.types';
import { useFormStorageStore } from 'src/store';

function useReviewColumns() {
  const { setParamsForm } = useFormStorageStore();

  const columns: ColumnsType<TReview> = [
    {
      title: '№',
      dataIndex: 'index',
      key: 'index',
      render: (_, _r, index) => index + 1,
      width: 100,
    },
    {
      title: 'Пользователь',
      dataIndex: 'name',
      key: 'name',
      render: (_, review) => review.user.name || '-',
    },
    {
      title: 'Комментарии',
      dataIndex: 'body',
      key: 'body',
      render: (_, review) => review.body || '-',
    },
    {
      title: 'Рейтинг',
      dataIndex: 'rating',
      key: 'rating',
      render: (_, review) => review.rating || '-',
    },
    {
      title: 'Ответ',
      dataIndex: 'answer',
      key: 'answer',
      render: (_, review) => review.answer || '-',
    },
    {
      title: 'Действия',
      dataIndex: 'actions',
      key: 'actions',
      width: 100,
      render: (_, review) => (
        <button
          className="text-xl flex items-center justify-center"
          onClick={() => setParamsForm(review)}
        >
          <FaEdit />
        </button>
      ),
    },
  ];
  return columns;
}

export { useReviewColumns };
