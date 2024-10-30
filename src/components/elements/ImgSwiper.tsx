// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const ImgSwiper = ({product}: any) => {

  console.log(product);
  
  return (
    <div className="w-[500px] h-[500px]">
        <Swiper
      className="bg-[#F6F6F6] rounded-md"
      spaceBetween={50}
      slidesPerView={1}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <div className="flex justify-center py-32">
          <img src={product.image} alt="product1" className="h-[200px]"/>
        </div>
      </SwiperSlide>
 
    </Swiper>
    </div>
  
  );
};

export default ImgSwiper;
