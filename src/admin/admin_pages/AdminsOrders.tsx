import Pagination from "../../components/elements/Pagination";
import AdminSearchBar from "../admin_components/AdminSearchBar";
import AdminTableCell from "../admin_components/AdminTableCell";
import AdminTableHeader from "../admin_components/AdminTableHeader";

const AdminsOrders = () => {
  return (
    <div className="bg-white rounded-md border">
      <AdminSearchBar showButton={false} />
      <table className="w-full p-7">
        <AdminTableHeader
          showOrder={true}
          showDate={true}
          showTotal={true}
          showStatus={true}
          showAction={true}
        />
        <AdminTableCell 
          showOrder={true}
          order='Raw Black T-Shirt Lineup'
          showDate={true}
          date='20 Mar, 2023'
          showTotal={true}
          total='$75.00'
          showStatus={true}
          status="Processing"
          
        />
      </table>

      <div className="flex justify-end">
        <Pagination />
      </div>
    </div>
  );
};

export default AdminsOrders;
