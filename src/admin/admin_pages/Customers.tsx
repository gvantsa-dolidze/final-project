import Pagination from "../../components/elements/Pagination";
import AdminSearchBar from "../admin_components/AdminSearchBar";
import AdminTableCell from "../admin_components/AdminTableCell";
import AdminTableHeader from "../admin_components/AdminTableHeader";

const Customers = () => {
  return (
    <div className="bg-white rounded-md border">
      <AdminSearchBar  showButton={false}/>
      <table className="w-full p-7">
        <AdminTableHeader
          showName={true}
          showEmail={true}
          showAddress={true}
          address="Shipping Address"
          showAction={true}
        />
        <AdminTableCell 
             showName={true}
             name='Esther Howard'
             showEmail={true}
             email="esther.howard@gmail.com"
             showAddress={true}
             address="8642 Yule Street, Arvada CO 80007"
        />
        </table>
      <div className="flex justify-end">
        <Pagination />
      </div>
    </div>
  )
}

export default Customers