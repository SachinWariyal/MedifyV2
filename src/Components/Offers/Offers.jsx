// import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import offer1 from "../../assets/offer1.png";
import offer2 from "../../assets/offer2.png";
import offer3 from "../../assets/offer3.png";
import "./Offers.css";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
const Offers = () => {
  return (
    <div className="swiper-container">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={100}
        slidesPerView={3}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img src={offer1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={offer2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={offer3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={offer1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={offer2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={offer3} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Offers;
