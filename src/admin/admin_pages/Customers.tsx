import Pagination from "../../components/elements/Pagination";
import AdminSearchBar from "../admin_components/AdminSearchBar";

const Customers = () => {
  return (
    <div className="bg-white rounded-md border">
      <AdminSearchBar  showButton={false}/>
      <div className="flex justify-end">
        <Pagination />
      </div>
    </div>
  )
}

export default Customers