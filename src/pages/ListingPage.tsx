import SideBar from "../components/listing_page_components/SideBar";
import GridContainer from "../components/listing_page_components/GridContainer";
import AppliedFilters from "../components/listing_page_components/AppliedFilters";
import ShowingResults from "../components/listing_page_components/ShowingResults";
import Breadcrumb from "../components/elements/Breadcrumb";
import Layout from "../components/layout/Layout";
// import { useEffect } from "react";
import PopOver from "../components/header_components/PopOver";
import SortByBtn from "../components/elements/SortByBtn";
import { useParams, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getByCategory, getAllProducts } from "../store/app/AllProductsReducer";
import { useAppDispatch, useAppSelector } from "../store/hooks";

const ListingPage = () => {

  const pageSize = 6;

  const [ searchParams ] = useSearchParams();
  const [pageOfProducts, setPageOfProducts] = useState([]);

  const dispatch = useAppDispatch();

  const { category_id } = useParams();

  const products = useAppSelector((state) => state.allProduct.data);

  const [totalPages, setTotalPages] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    setTotalPages(products.length / pageSize + ((products.length % pageSize) ? 1 : 0));
    setTotalItems(products.length);
  }, [products]);

  useEffect(() => {
    if (category_id) {
      dispatch(getByCategory(category_id));
    } else {
      dispatch(getAllProducts());
    }
  }, [dispatch, category_id]);

  useEffect(() => {
    const offset: string = searchParams.get('offset') || '1';
    const o: number =  Number(offset) - 1 || 0;
    setPageOfProducts(
      () => {
        return products.slice(o*pageSize, o*pageSize+pageSize)
      }
    );
    setCurrentPage(o);
  }, [products, searchParams]);


  return (
    <Layout>
      <div className="bg-BackgroundGray hidden md:block">
        <div className="max-w-1116 m-auto">
          <Breadcrumb
            title=""
            label="Ecommerce"
            secondaryLabel="Search"
            destination="/"
            secondaryDestination="/listing_page"
          />
        </div>
      </div>
      <div className="max-w-1116 m-auto gap-10 flex py-10 justify-center">
        <SideBar />
        <div className="flex flex-col gap-10">
          <div className="text-start space-y-10 px-2">
            {/* <AppliedFilters /> */}
            <div className="flex justify-between items-center">
              <ShowingResults totalItems={totalItems} currentPage={currentPage+1} pageSize={pageSize} className="md:block hidden" />
              <div className="flex flex-row-reverse items-center">
                <SortByBtn />
                <PopOver categories="CATEGORIES" className="md:hidden block" />
              </div>
            </div>
          </div>
          <GridContainer pageOfProducts={pageOfProducts} totalPages={totalPages}/>
        </div>
      </div>
    </Layout>
  );
};

export default ListingPage;
