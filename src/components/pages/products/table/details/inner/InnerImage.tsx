import { Spin } from 'antd';
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import noImage from 'src/app/assets/noImage.jpg';
import { Confirm } from 'src/components';
import { useDeleteImageMutation, useGetImageQuery } from 'src/services';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const InnerImage: React.FC<{ id: number | undefined }> = ({ id }) => {
  const { data: images, isLoading } = useGetImageQuery(Number(id));
  const { mutate } = useDeleteImageMutation(Number(id));

  return (
    <div className="max-w-60 sm:max-w-80 w-full overflow-hidden p-8">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper shadow-xl rounded-lg pb-8"
        loop
      >
        {isLoading ? (
          <Spin />
        ) : (
          // eslint-disable-next-line operator-linebreak
          images?.data.length &&
          images?.data.map(({ id, url }) => (
            <SwiperSlide key={id} className="w-full min-h-60">
              <img
                src={url || noImage}
                alt={id.toString() || 'noImage'}
                className="min-h-60 w-full object-cover"
              />
              <div className="flex items-center justify-end px-4">
                <Confirm
                  title="Удалить?"
                  description="Вы точно хотите удалить?"
                  okText="Да"
                  cancelText="Нет"
                  onConfirm={() => mutate(id)}
                  placement="topRight"
                >
                  <MdDeleteForever className="text-red-500 text-2xl cursor-pointer" />
                </Confirm>
              </div>
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export { InnerImage };
