import Pagination from "../../components/elements/Pagination";
import SearchBar from "../../components/header_components/SearchBar";
import AdminTableCell from "../admin_components/AdminTableCell";
import AdminTableHeader from "../admin_components/AdminTableHeader";

const Customers = () => {
  return (
    <div className="bg-white rounded-md border">
      <div className="flex justify-between items-center p-7">
        <h3>Customers</h3>
        <SearchBar />
      </div>
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
          name="Esther Howard"
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
  );
};

export default Customers;
