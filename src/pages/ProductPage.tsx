import ImgSwiper from "../components/elements/ImgSwiper";
import DetailCustomizer from "../components/product_page_components/DetailCustomizer";
const ProductPage = () => {
  return (
    <div className="max-w-1116 m-auto">
      <div className="py-5 flex max-w-[1092px]">
       <ImgSwiper />
       <DetailCustomizer />
      </div>
      
    </div>
  );
};

export default ProductPage;
