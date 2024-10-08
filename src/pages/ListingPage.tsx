import SideBar from "../components/listing_page_components/SideBar";
import GridContainer from "../components/listing_page_components/GridContainer";
import AppliedFilters from "../components/listing_page_components/AppliedFilters";
import ShowingResults from "../components/listing_page_components/ShowingResults";
import Breadcrumb from "../components/elements/Breadcrumb";
const ListingPage = () => {
  return (
    <div>
      <div className="bg-BackgroundGray">
        <Breadcrumb label='Search' title=''/>
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
    </div>
    
  );
};

export default ListingPage;
