import SideBar from "../components/listing_page_components/SideBar";
import GridContainer from "../components/listing_page_components/GridContainer";
import AppliedFilters from "../components/listing_page_components/AppliedFilters";
import ShowingResults from "../components/listing_page_components/ShowingResults";
import Breadcrumb from "../components/elements/Breadcrumb";
import Layout from "../components/layout/Layout";
// import { useEffect } from "react";
import PopOver from "../components/header_components/PopOver";
import SortByBtn from "../components/elements/SortByBtn";

const ListingPage = () => {
  // useEffect(() => {
  //   console.log(window.location.search);
  // }, []);

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
            <AppliedFilters />
            <div className="flex justify-between items-center">
              <ShowingResults className="md:block hidden" />
              <div className="flex flex-row-reverse items-center">
                <SortByBtn />
                <PopOver categories="CATEGORIES" className="md:hidden block" />
              </div>
            </div>
          </div>
          <GridContainer />
        </div>
      </div>
    </Layout>
  );
};

export default ListingPage;
