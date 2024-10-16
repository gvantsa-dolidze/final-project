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
        {/* <AdminTableCell /> */}
      </table>

      <div className="flex justify-end">
        <Pagination />
      </div>
    </div>
  );
};

export default AdminsOrders;
