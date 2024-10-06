// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const ImgSwiper = () => {
  return (
    <div className="w-[534px]">
        <Swiper
      className="bg-[#F6F6F6] rounded-md"
      spaceBetween={50}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="flex justify-center py-32">
          <img src="/img/cover.png" alt="product1" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center py-32">
          <img src="/img/cover1.png" alt="product1"/>
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center py-32">
          <img src="/img/cover2.png" alt="product1" />
        </div>{" "}
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex justify-center py-32">
          <img src="/img/cover3.png" alt="product1" />
        </div>{" "}
      </SwiperSlide>
    </Swiper>
    </div>
  
  );
};

export default ImgSwiper;
