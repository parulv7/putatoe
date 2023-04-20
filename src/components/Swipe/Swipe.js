import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import s1 from "../../assets/s1.jpeg"
import s2 from "../../assets/s2.jpeg"
import s3 from "../../assets/s3.jpeg"
import s4 from "../../assets/s4.jpeg"
import './Swipe.css'
const Swipe = () => {
  return (
    <div className='swipe_container'>
 <div className='swiper'>
<Swiper
        slidesPerView={1}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='SwiperSlide'><img className='SwiperSlide_img' src={s1}/></SwiperSlide>
        <SwiperSlide className='SwiperSlide'><img className='SwiperSlide_img' src={s2}/></SwiperSlide>
        <SwiperSlide className='SwiperSlide'><img className='SwiperSlide_img' src={s3}/></SwiperSlide>
        <SwiperSlide className='SwiperSlide'><img className='SwiperSlide_img' src={s4}/></SwiperSlide>
        <SwiperSlide className='SwiperSlide'><img className='SwiperSlide_img' src={s1}/></SwiperSlide>
        <SwiperSlide className='SwiperSlide'><img className='SwiperSlide_img' src={s2}/></SwiperSlide>
        
      </Swiper>
</div>
    </div>
  )
}

export default Swipe