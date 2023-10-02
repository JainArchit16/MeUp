import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import Card from "./Card"; 
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';

const Upcoming = (props) => {
  return (
    <div className='flex flex-col bg-gray-100 p-20 h-[650px]'>
      <p className='text-3xl font-bold px-3 py-1'>Upcoming Events</p>
      <p className='text-xl opacity-70 px-3 py-1'>You can choose to display featured</p>
      <div className='bg-red-500 w-[5%] h-0.5 text-white text-1 mx-3 mt-1 mb-3'> " s"</div>
      {
        console.log("Upcomng")
      }
      {

      console.log(props.data)
      }
      <div>


      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {
            props.data.map((dataOne) => <SwiperSlide><Card dataOne={dataOne}></Card></SwiperSlide>)

        }

        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>

      </div>
      
    </div>
  )
}

export default Upcoming
