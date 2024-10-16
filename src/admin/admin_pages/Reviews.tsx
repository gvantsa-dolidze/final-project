import Pagination from "../../components/elements/Pagination";
import AdminSearchBar from "../admin_components/AdminSearchBar";
const Reviews = () => {
  return (
    <div className="bg-white rounded-md border">
      <AdminSearchBar  showButton={false}/>
      <div className="flex justify-end">
        <Pagination />
      </div>
    </div>
  )
}

export default Reviews