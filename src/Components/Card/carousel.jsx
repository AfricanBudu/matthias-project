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
       
        
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='md:h-[760px] xs:h-[200px]'>
        <img src="/images/matthias-welcome-image.png" alt="a piece of art" />
        </SwiperSlide>
        <SwiperSlide className='md:h-[760px] xs:h-[200px]'>
        <img src="/images/second.png" alt="a piece of art" />

        </SwiperSlide>
        <SwiperSlide className='md:h-[760px] xs:h-[200px]'>
        <img src="/images/third.png" alt="a piece of art" />

        </SwiperSlide>
        <SwiperSlide className='md:h-[760px] xs:h-[200px]'>
        <img src="/images/fourth.png" alt="a piece of art" />

        </SwiperSlide>
        <SwiperSlide className='md:h-[760px] xs:h-[200px]'>
        <img src="/images/fifth.png" alt="a piece of art" />

        </SwiperSlide>
        <SwiperSlide className='md:h-[760px] xs:h-[200px]'>
        <img src="/images/six.png" alt="a piece of art" />

        </SwiperSlide>
      
      </Swiper>
    </>
  );
}
