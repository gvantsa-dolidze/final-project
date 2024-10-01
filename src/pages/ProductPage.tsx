import ImgSwiper from "../components/elements/ImgSwiper";
import DetailCustomizer from "../components/product_page_components/DetailCustomizer";
import SimiliarProducts from "../components/product_page_components/SimiliarProducts";
const ProductPage = () => {
  return (
    <div className="max-w-1116 m-auto py-10 space-y-10">
      <div className="flex">
       <ImgSwiper />
       <DetailCustomizer />
      </div>
      <SimiliarProducts />
    </div>
  );
};

export default ProductPage;
