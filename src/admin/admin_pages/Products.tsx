import LinkBtn from "../../components/elements/LinkBtn";
import Pagination from "../../components/elements/Pagination";
import SearchBar from "../../components/header_components/SearchBar";
import AdminTableCell from "../admin_components/AdminTableCell";
import AdminTableHeader from "../admin_components/AdminTableHeader";

const Products = () => {
  return (
    <div className="bg-white rounded-md border">
      <div className="flex justify-between gap-7 p-7 items-center">
        <h3>Product</h3>
        <div className="flex gap-7">
          <LinkBtn label="Add product" destination="/admin_page/add_product" />
          <SearchBar />
        </div>
      </div>
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
