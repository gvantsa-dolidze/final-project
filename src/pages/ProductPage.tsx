import ImgSwiper from "../components/elements/ImgSwiper";
import DetailCustomizer from "../components/product_page_components/DetailCustomizer";
import SimilarProducts from "../components/product_page_components/SimilarProducts";
import AboutProduct from "../components/product_page_components/AboutProduct";
import Breadcrumb from "../components/elements/Breadcrumb";
import Layout from "../components/layout/Layout";

import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useParams } from "react-router-dom"; // Import useParams
import { useEffect } from "react";

import { getSingleProduct } from "../store/app/SingleProductReducer";


const ProductPage = () => {

  const { id } = useParams(); // Get the product ID from the URL

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(Number(id))); // Dispatch the action with the product ID
  }, [id]);

  const product = useAppSelector((state) => state.singleProduct.data);



  return (
    <Layout>
      <div className=" bg-BackgroundGray py-5">
        <div className="max-w-1116 m-auto bg-BackgroundGray">
          <Breadcrumb
            product={product}
            title=""
            label="Ecommerce"
            secondaryLabel=""
            destination="/"
            secondaryDestination="/product_page"
          />
        </div>
      </div>


      <div className="max-w-1116 m-auto py-10 space-y-10 px-5">
        <div className="xl:flex xl:space-y-0 space-y-10  md:justify-between">
          <ImgSwiper product={product} />
          <DetailCustomizer product={product} />
        </div>
        <AboutProduct />
        <SimilarProducts />
      </div>
    </Layout>
  );
};

export default ProductPage;
