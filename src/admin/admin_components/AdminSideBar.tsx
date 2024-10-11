import { NavLink } from "react-router-dom";
import AdminLogo from "../admin_elements/AdminLogo";
const AdminSideBar = () => {
  return (
    <div className="flex flex-col w-64 border-b-2 p-5 bg-white border-r ">
      <AdminLogo />
      <div className="flex flex-col border-b pb-5">
        <NavLink
          to="dashboard"
          className="p-4 flex justify-start gap-5 hover:bg-BackgroundGray hover:rounded-md"
        >
          <img src="/img/icons/Add to cart.png" alt="img" /> <p>Dashboard</p>
        </NavLink>
        <NavLink
          to="products"
          className="p-4 flex justify-start gap-5 hover:bg-BackgroundGray hover:rounded-md"
        >
          {" "}
          <img src="/img/icons/Add to cart.png" alt="img" /> <p>Products</p>{" "}
        </NavLink>
        <NavLink
          to="admins_orders"
          className="p-4 flex justify-start gap-5 hover:bg-BackgroundGray hover:rounded-md"
        >
          <img src="/img/icons/Add to cart.png" alt="img" /> <p>Orders</p>{" "}
        </NavLink>
        <NavLink
          to="customers"
          className="p-4 flex justify-start gap-5 hover:bg-BackgroundGray hover:rounded-md"
        >
          <img src="/img/icons/Add to cart.png" alt="img" /> <p>Customers</p>{" "}
        </NavLink>
        <NavLink
          to="reviews"
          className="p-4 flex justify-start gap-5 hover:bg-BackgroundGray hover:rounded-md"
        >
          {" "}
          <img src="/img/icons/Add to cart.png" alt="img" />
          <p>reviews</p>
        </NavLink>
        <NavLink
          to="settings"
          className="p-4 flex justify-start gap-5 hover:bg-BackgroundGray hover:rounded-md"
        >
          {" "}
          <img src="/img/icons/Add to cart.png" alt="img" />
          <p>settings</p>
        </NavLink>
      </div>
      <div className="py-5">
        <NavLink
          to=""
          className="p-4 flex justify-start gap-5 hover:bg-BackgroundGray hover:rounded-md"
        >
          <img src="/img/icons/Add.png" alt="" />
          <p>Extras</p>
        </NavLink>
      </div>
    </div>
  );
};

export default AdminSideBar;
