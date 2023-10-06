import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import Card from "./Card"; 
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import {data} from "../slideData.js";
import Slide from "./Slide.js";

const Most = () => {
  return (
    <div className='flex flex-col bg-gray-100 p-20 h-[650px]'>
        <p className='text-3xl font-bold px-3 py-1'>Most Visited Places</p>
        <p className='text-xl opacity-70 px-3 py-1'>You can choose to display featured

</p>
        <div className='bg-red-500 w-[5%] h-0.5 text-white text-1 mx-3 mt-1 mb-3'> " s"</div>
      <div>


      <Swiper
        slidesPerView={4}
        spaceBetween={20}
        loop={true}
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
        
      >
      {

        data.map((dataOne) => <SwiperSlide><Slide data={dataOne}></Slide></SwiperSlide>)
      }
        </Swiper>

</div>

</div>
  )
}

export default Most
