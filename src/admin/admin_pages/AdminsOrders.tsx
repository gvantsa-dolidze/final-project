import Pagination from "../../components/elements/Pagination";
import SearchBar from "../../components/header_components/SearchBar";
import AdminTableCell from "../admin_components/AdminTableCell";
import AdminTableHeader from "../admin_components/AdminTableHeader";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { getAllProducts } from "../../store/app/AllProductsReducer";

const AdminsOrders = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  });

  const products = useAppSelector((state) => state.allProduct.data || []);

  return (
    <div className="bg-white rounded-md border">
      <div className="flex justify-between items-center p-7">
        <h3>Orders</h3>
        <SearchBar />
      </div>
      <table className="w-full p-7">
        <AdminTableHeader
          showOrder={true}
          showDate={true}
          showTotal={true}
          showStatus={true}
          showAction={true}
        />
        {products.map((product: any) => (
          <AdminTableCell
            showOrder={true}
            order={product.title}
            showDate={true}
            date="20 Mar, 2023"
            showTotal={true}
            total={product.price}
            showStatus={true}
            status="Processing"
            showImage={true}
            image={product.image}
          />
        ))}
      </table>

      <div className="flex justify-end">
        <Pagination />
      </div>
    </div>
  );
};

export default AdminsOrders;
