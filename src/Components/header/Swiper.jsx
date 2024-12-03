import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import '../../assets/sass/media.scss';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { BsArrowRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';

// import required modules


export default function App() {
  return (
    <>
      <div className="header_right2">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
           <div className="swiper_all">
           <div className="left_info">
            <div className="left_logo">
                <img src="iphone_logo.png" alt="" className="left_apple" />
                <p className="title">
                iPhone 14 Series
                </p>
                </div>
                <div className="esse">
                <h2 className="left_text">
                Up to 10% off Voucher
                </h2>
                
                <div className="now">
                    <ul className="left_list">
                        <li>
                            <Link to={"/"} className="left_link">Shop Now</Link>

                        </li>
                    </ul>
                    <div className="left_icon">
                    <BsArrowRight />
                    </div>
                </div>
            </div>
           </div>
           <div className="right_img">
            <img src="iphone14.png" alt="" className="right_apple" />
           </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="rec">
            {/* bu yerda sizni reklamangiz bo'lishi mumkin edi ! */}
            BU YERDA SIZNI REKLAMANGIZ BO'LISHI MUMKIN EDI
          </h1>
        </SwiperSlide>
        <SwiperSlide>
           <div className="swiper_all">
           <div className="left_info">
            <div className="left_logo">
                <img src="iphone_logo.png" alt="" className="left_apple" />
                <p className="title">
                iPhone 14 Series
                </p>
                </div>
                <div className="esse">
                <h2 className="left_text">
                Up to 10% off Voucher
                </h2>
                
                <div className="now">
                    <ul className="left_list">
                        <li>
                            <Link to={"/"} className="left_link">Shop Now</Link>

                        </li>
                    </ul>
                    <div className="left_icon">
                    <BsArrowRight />
                    </div>
                </div>
            </div>
           </div>
           <div className="right_img">
            <img src="iphone14.png" alt="" className="right_apple" />
           </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className="swiper_all">
           <div className="left_info">
            <div className="left_logo">
                <img src="iphone_logo.png" alt="" className="left_apple" />
                <p className="title">
                iPhone 14 Series
                </p>
                </div>
                <div className="esse">
                <h2 className="left_text">
                Up to 10% off Voucher
                </h2>
                
                <div className="now">
                    <ul className="left_list">
                        <li>
                            <Link to={"/"} className="left_link">Shop Now</Link>

                        </li>
                    </ul>
                    <div className="left_icon">
                    <BsArrowRight />
                    </div>
                </div>
            </div>
           </div>
           <div className="right_img">
            <img src="iphone14.png" alt="" className="right_apple" />
           </div>
           </div>
        </SwiperSlide>
        <SwiperSlide>
           <div className="swiper_all">
           <div className="left_info">
            <div className="left_logo">
                <img src="iphone_logo.png" alt="" className="left_apple" />
                <p className="title">
                iPhone 14 Series
                </p>
                </div>
                <div className="esse">
                <h2 className="left_text">
                Up to 10% off Voucher
                </h2>
                
                <div className="now">
                    <ul className="left_list">
                        <li>
                            <Link to={"/"} className="left_link">Shop Now</Link>

                        </li>
                    </ul>
                    <div className="left_icon">
                    <BsArrowRight />
                    </div>
                </div>
            </div>
           </div>
           <div className="right_img">
            <img src="iphone14.png" alt="" className="right_apple" />
           </div>
           </div>
        </SwiperSlide>
      </Swiper>
      </div>

    </>
  );
}
