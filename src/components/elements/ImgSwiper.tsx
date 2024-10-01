// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const ImgSwiper = () => {
  return (
    <Swiper
      className="w-[534px] h-[574px] bg-[#F6F6F6]"
      spaceBetween={50}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <img src="" alt="product1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="" alt="product2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="" alt="product3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="" alt="product4" />
      </SwiperSlide>
    </Swiper>
  );
};

export default ImgSwiper;
