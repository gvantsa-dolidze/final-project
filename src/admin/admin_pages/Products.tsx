import Pagination from "../../components/elements/Pagination";
import AdminSearchBar from "../admin_components/AdminSearchBar";
import AdminTable from "../admin_components/AdminTable";

const Products = () => {
  return (
    <div className="bg-white rounded-md border">
      <AdminSearchBar showButton={true}/>
      <AdminTable />
      <div className="flex justify-end">
      <Pagination />  
      </div>
      
    </div>
  );
};

export default Products;
