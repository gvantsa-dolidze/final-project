import Pagination from "../../components/elements/Pagination";
import SearchBar from "../../components/header_components/SearchBar";
import AdminTableCell from "../admin_components/AdminTableCell";
import AdminTableHeader from "../admin_components/AdminTableHeader";

const AdminsOrders = () => {
  return (
    <div className="bg-white rounded-md border">
<SearchBar />
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
