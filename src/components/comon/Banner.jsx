import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import parcel from "../../assets/tiny-deliveryman.png";
import image1 from "../../assets/big-deliveryman.png";

const Banner = () => {
  return (
    <div className="banner h-[92vh] md:h-[91vh] lg:h-[90vh] 2xl:h-[89vh] w-full px-5 md:px-13 lg:px-25 2xl:px-35">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="w-full">
          <div className="h-[92vh] md:h-[91vh] lg:h-[90vh] 2xl:h-[89vh] w-full flex flex-col lg:flex-row items-center lg:justify-between px-10 lg:px-20">
            <div className="w-full lg:w-1/2">
              <img src={parcel} alt="" />
              <h2>
                We Make Sure Your <br /> <span>Parcel Arrives</span> On Time{" "}
                <br /> - No Fuss.
              </h2>
              <p>
                Delivering your parcels safely, quickly, and on schedule. Our
                trusted logistics team ensures every shipment reaches its
                destination with speed, care, and complete reliability.
              </p>
              <div>
                <button>Get Started</button>
                <button>Learn More</button>
              </div>
            </div>
            <div>
              <img src={image1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">Hello</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
