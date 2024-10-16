import AdminSearchBart from "../admin_components/AdminSearchBar";
import AdminTable from "../admin_components/AdminTable";

const Products = () => {
  return (
    <div className="bg-white rounded-md border">
      <AdminSearchBart />
      <AdminTable />
    </div>
  );
};

export default Products;
