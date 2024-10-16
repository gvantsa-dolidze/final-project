import Pagination from "../../components/elements/Pagination";
import AdminSearchBar from "../admin_components/AdminSearchBar";
import AdminTableCell from "../admin_components/AdminTableCell";
import AdminTableHeader from "../admin_components/AdminTableHeader";

const Products = () => {
  return (
    <div className="bg-white rounded-md border">
      <AdminSearchBar showButton={true} />

      <table className="w-full p-7">
        <AdminTableHeader
          showName={true}
          showSKU={true}
          showPrice={true}
          showStock={true}
          showCategories={true}
          showAction={true}
          name="Name"
          sku="SKU"
          price="Price"
          stock="Stock"
          categories="Categories"
          action="Action"
        />
        <AdminTableCell />
      </table>

      <div className="flex justify-end">
        <Pagination />
      </div>
    </div>
  );
};

export default Products;
