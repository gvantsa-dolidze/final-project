import SideBar from "../components/listing_page_components/SideBar";
import GridContainer from "../components/listing_page_components/GridContainer";
import AppliedFilters from "../components/listing_page_components/AppliedFilters";
import ShowingResults from "../components/listing_page_components/ShowingResults";
import Breadcrumb from "../components/elements/Breadcrumb";
import Layout from "../components/layout/Layout";

const ListingPage = () => {
  return (
    <Layout>
      <div className="bg-BackgroundGray">
        <div className="max-w-1116 m-auto py-5">
          <Breadcrumb
            label="Ecommerce"
            secondaryLabel="Search"
            destination="/"
            secondaryDestination="/listing_page"
          />
        </div>
      </div>
      <div className="max-w-1116 m-auto gap-10 flex py-10">
        <SideBar />
        <div className="flex flex-col gap-10">
          <div className="text-start space-y-10">
            <AppliedFilters />
            <ShowingResults />
          </div>
          <GridContainer />
        </div>
      </div>
    </Layout>
  );
};

export default ListingPage;
