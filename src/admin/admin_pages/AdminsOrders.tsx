import Pagination from "../../components/elements/Pagination";
import AdminSearchBart from "../admin_components/AdminSearchBar";
import AdminTable from "../admin_components/AdminTable";
const AdminsOrders = () => {
  return (
    <div className="bg-white rounded-md border">
      <AdminSearchBart  showButton={false}/>
      <AdminTable />
      <div className="flex justify-end">
      <Pagination /> 
      </div>
    </div>
  )
}

export default AdminsOrders