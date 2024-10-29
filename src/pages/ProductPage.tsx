import ImgSwiper from "../components/elements/ImgSwiper";
import DetailCustomizer from "../components/product_page_components/DetailCustomizer";
import SimilarProducts from "../components/product_page_components/SimilarProducts";
import AboutProduct from "../components/product_page_components/AboutProduct";
import Breadcrumb from "../components/elements/Breadcrumb";
import Layout from "../components/layout/Layout";

const ProductPage = () => {
  return (
    <Layout>
      <div className="max-w-1116 m-auto">
        <Breadcrumb
          title=""
          label="Ecommerce"
          secondaryLabel="Raw Black T-Shirt Lineup"
          destination="/"
          secondaryDestination="/product_page"
          
        />
      </div>

      <div className="max-w-1116 m-auto py-10 space-y-10">
        <div className="flex justify-between">
          <ImgSwiper />
          <DetailCustomizer />
        </div>
        <AboutProduct />
        <SimilarProducts />
      </div>
    </Layout>
  );
};

export default ProductPage;
