// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const ImgSwiper = ({ product }: any) => {

  console.log(product);

  return (
    <div className="xl:w-2/4 w-4/4">
      <Swiper
        className=""
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div className="flex justify-center ">
            <img 
               src={product.image} 
               alt="product1" 
               className="h-96" 
            />
          </div>
        </SwiperSlide>

      </Swiper>
    </div>

  );
};

export default ImgSwiper;
