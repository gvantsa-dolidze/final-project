// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

const ImgSwiper = () => {
  return (
    <Swiper
    spaceBetween={50}
    slidesPerView={1}
    className='w-[534px] h-[574px] bg-[#F6F6F6]'
    // onSlideChange={() => console.log('slide change')}
    // onSwiper={(swiper) => console.log(swiper)}
  >
    <SwiperSlide><img src="/img/" alt="product" /></SwiperSlide>
    <SwiperSlide><img src="/img/" alt="product" /></SwiperSlide>
    <SwiperSlide><img src="/img/" alt="product" /></SwiperSlide>
    <SwiperSlide><img src="/img/" alt="product" /></SwiperSlide>
  </Swiper>
);
  
}

export default ImgSwiper