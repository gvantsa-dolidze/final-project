import Pagination from "../../components/elements/Pagination";
import Categories from "../../components/listing_page_components/Categories";
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
        <AdminTableCell
          showName={true}
          name="Raw Black T-Shirt Lineup"
          showSKU={true}
          sku="47514501"
          showPrice={true}
          price="$75.00"
          showStock={true}
          stock="In Stock"
          showCategories={true}
          categories="T-shirt, Men"
        />
      </table>

      <div className="flex justify-end">
        <Pagination />
      </div>
    </div>
  );
};

export default Products;
