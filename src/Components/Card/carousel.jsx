import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
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
        
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='lg:h-[700px] xs:h-[200px]'>
        <img src="https://images.pexels.com/photos/27498740/pexels-photo-27498740/free-photo-of-mathy3.png?auto=compress&cs=tinysrgb&w=1000&lazy=load" alt="a piece of art" />
        </SwiperSlide>
        <SwiperSlide className='lg:h-[700px] xs:h-[200px]'>
        <img src="https://images.pexels.com/photos/27498737/pexels-photo-27498737/free-photo-of-math4.png?auto=compress&cs=tinysrgb&w=1000&lazy=load" alt="a piece of art" />

        </SwiperSlide>
        <SwiperSlide className='lg:h-[700px] xs:h-[200px]'>
        <img src="https://images.pexels.com/photos/27498739/pexels-photo-27498739/free-photo-of-math6.png?auto=compress&cs=tinysrgb&w=1000&lazy=load" alt="a piece of art" />

        </SwiperSlide>
        <SwiperSlide className='lg:h-[700px] xs:h-[200px]'>
        <img src="https://images.pexels.com/photos/27498736/pexels-photo-27498736/free-photo-of-mathy2.png?auto=compress&cs=tinysrgb&w=1000&lazy=load" alt="a piece of art" />

        </SwiperSlide>
        <SwiperSlide className='lg:h-[700px] xs:h-[200px]'>
        <img src="https://images.pexels.com/photos/27498735/pexels-photo-27498735/free-photo-of-mathy.png?auto=compress&cs=tinysrgb&w=1000&lazy=load" alt="a piece of art" />

        </SwiperSlide>
        <SwiperSlide className='lg:h-[700px] xs:h-[200px]'>
        <img src="https://images.pexels.com/photos/27498738/pexels-photo-27498738/free-photo-of-math5.png?auto=compress&cs=tinysrgb&w=1000&lazy=load" alt="a piece of art" />

        </SwiperSlide>
      
      </Swiper>
    </>
  );
}
