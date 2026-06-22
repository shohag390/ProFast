import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import parcel from "../../assets/tiny-deliveryman.png";
import parce2 from "../../assets/tiny-deliverycar.png";
import parce3 from "../../assets/tiny-deliverycar2.png";
import image1 from "../../assets/big-deliveryman.png";
import image2 from "../../assets/big-deliveryman2.png";
import image3 from "../../assets/big-deliveryman3.png";

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
              <img className="h-20" src={parcel} alt="" />
              <h2 className="font-bold text-[50px] leading-14 pt-4">
                We Make Sure Your <br />{" "}
                <span className="text-[#ACC857]">Parcel Arrives</span> On Time{" "}
                <br /> - No Fuss.
              </h2>
              <p className="text-[#606060] pt-6 pb-10">
                Delivering your parcels safely, quickly, and on schedule. Our
                trusted logistics team ensures every shipment reaches its
                destination with speed, care, and complete reliability.
              </p>
              <div className="flex items-center gap-3 lg:gap-5">
                <button className="px-4 md:px-6 lg:px-8 2xl:px-10 py-2 lg:py-2.5 hidden lg:inline rounded-full text-[14px] lg:text-[16px] hover:bg-[#000000] border border-[#CAEB66] text-[#000000] hover:text-[#CAEB66] duration-500">
                  Learn More
                </button>
                <button className="px-4 md:px-6 lg:px-8 2xl:px-10 py-2 lg:py-2.5 rounded-full text-[14px] lg:text-[16px] border border-[#CAEB66] bg-[#CAEB66] hover:bg-[#000000] text-[#000000] hover:text-[#CAEB66] duration-500">
                  Get Started
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:flex lg:justify-end">
              <img className="h-120" src={image1} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div className="h-[92vh] md:h-[91vh] lg:h-[90vh] 2xl:h-[89vh] w-full flex flex-col lg:flex-row items-center lg:justify-between px-10 lg:px-20">
            <div className="w-full lg:w-1/2">
              <img className="h-20" src={parce2} alt="" />
              <h2 className="font-bold text-[50px] leading-14 pt-4">
                From Pickup to Delivery <br /> We {""}
                <span className="text-[#ACC857]">Handle Every</span> Parcel
                <br /> - with Care.
              </h2>
              <p className="text-[#606060] pt-6 pb-10">
                Whether you're sending personal packages or business shipments,
                and reliable delivery services. Our trusted network ensures
                every parcel reaches its destination with care and precision.
              </p>
              <div className="flex items-center gap-3 lg:gap-5">
                <button className="px-4 md:px-6 lg:px-8 2xl:px-10 py-2 lg:py-2.5 hidden lg:inline rounded-full text-[14px] lg:text-[16px] hover:bg-[#000000] border border-[#CAEB66] text-[#000000] hover:text-[#CAEB66] duration-500">
                  Learn More
                </button>
                <button className="px-4 md:px-6 lg:px-8 2xl:px-10 py-2 lg:py-2.5 rounded-full text-[14px] lg:text-[16px] border border-[#CAEB66] bg-[#CAEB66] hover:bg-[#000000] text-[#000000] hover:text-[#CAEB66] duration-500">
                  Get Started
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:flex lg:justify-end">
              <img className="h-150" src={image2} alt="" />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <div className="h-[92vh] md:h-[91vh] lg:h-[90vh] 2xl:h-[89vh] w-full flex flex-col lg:flex-row items-center lg:justify-between px-10 lg:px-20">
            <div className="w-full lg:w-1/2">
              <img className="h-20" src={parce3} alt="" />
              <h2 className="font-bold text-[50px] leading-14 pt-4">
                Fast, Secure & Reliable <br />{" "}
                <span className="text-[#ACC857]">Delivery</span> Every Parcel,{" "}
                <br /> - Every Time.
              </h2>
              <p className="text-[#606060] pt-6 pb-10">
                Experience hassle-free shipping with our professional courier
                services. We reliability to deliver your parcels on time, giving
                you complete peace of mind with every shipment.
              </p>
              <div className="flex items-center gap-3 lg:gap-5">
                <button className="px-4 md:px-6 lg:px-8 2xl:px-10 py-2 lg:py-2.5 hidden lg:inline rounded-full text-[14px] lg:text-[16px] hover:bg-[#000000] border border-[#CAEB66] text-[#000000] hover:text-[#CAEB66] duration-500">
                  Learn More
                </button>
                <button className="px-4 md:px-6 lg:px-8 2xl:px-10 py-2 lg:py-2.5 rounded-full text-[14px] lg:text-[16px] border border-[#CAEB66] bg-[#CAEB66] hover:bg-[#000000] text-[#000000] hover:text-[#CAEB66] duration-500">
                  Get Started
                </button>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:flex lg:justify-end">
              <img className="h-140" src={image3} alt="" />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
