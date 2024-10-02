import SideBar from "../components/listing_page_components/SideBar"
import GridContainer from "../components/listing_page_components/GridContainer"
const ListingPage = () => {
  return (
    <div className="max-w-1116 m-auto gap-10 flex">
      <SideBar />
      <GridContainer />
    </div>
  )
}

export default ListingPage