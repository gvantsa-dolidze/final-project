import ImgSwiper from "../components/elements/ImgSwiper";
import DetailCustomizer from "../components/product_page_components/DetailCustomizer";
const ProductPage = () => {
  return (
    <div className="max-w-1116 m-auto py-10">
      <div className="flex">
       <ImgSwiper />
       <DetailCustomizer />
      </div>
      
    </div>
  );
};

export default ProductPage;
