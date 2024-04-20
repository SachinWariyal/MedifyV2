// import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import doc1 from "../../assets/profile-1.png";
import doc2 from "../../assets/profile-2.png";
import doc3 from "../../assets/profile-3.png";
import doc4 from "../../assets/profile-4.png";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "./Doctors.css";
import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";
const Doctors = () => {
  return (
    <div className="doctors-section" id="doctors">
      <h2 className="doc-heading">Our Medical Specialists</h2>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        slidesPerView={3}
        navigation
        // pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        <div className="doc-list">
          <SwiperSlide>
            <div className="doc-container">
            <img
              src={doc1}
              alt=""
              className="doctor"
              height={310}
              width={270}
            />
            <div className="doc--details">
              <p className="doc-name">Dr.Itachi Uchiha</p>
              <p className="doc-spec">Genjutsu Specialist</p>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="doc-container">
            <img
              src={doc2}
              alt=""
              className="doctor"
              height={310}
              width={270}
            />
            <div className="doc--details">
            <p className="doc-name">Dr.Itachi Uchiha</p>
              <p className="doc-spec">Genjutsu Specialist</p>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="doc-container">
            <img
              src={doc3}
              alt=""
              className="doctor"
              height={310}
              width={270}
            />
            <div className="doc--details">
            <p className="doc-name">Dr.Itachi Uchiha</p>
              <p className="doc-spec">Genjutsu Specialist</p>
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className="doc-container">
            <img
              src={doc4}
              alt=""
              className="doctor"
              height={310}
              width={270}
            />
            <div className="doc--details">
              <p className="doc-name">Dr.Itachi Uchiha</p>
              <p className="doc-spec">Genjutsu Specialist</p>
            </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Doctors;
