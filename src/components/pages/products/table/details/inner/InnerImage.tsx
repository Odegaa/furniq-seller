import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import example from 'src/app/assets/example.avif';
import noImage from 'src/app/assets/noImage.jpg';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

const InnerImage: React.FC = () => (
  <div className="max-w-80 w-full overflow-hidden p-8">
    <Swiper
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper shadow-xl rounded-lg pb-8"
      loop
    >
      <SwiperSlide className="w-full">
        <img src={noImage} alt="noImg" className="w-full" />
        <div className="flex items-center justify-end px-4">
          <MdDeleteForever
            onClick={() => console.log('click')}
            className="text-red-500 text-2xl cursor-pointer"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <img src={example} alt="example" className="w-full" />
        <div className="flex items-center justify-end px-4">
          <MdDeleteForever
            onClick={() => console.log('click')}
            className="text-red-500 text-2xl cursor-pointer"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>
);

export { InnerImage };
