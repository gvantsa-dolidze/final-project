import LinkBtn from "../../components/elements/LinkBtn";
import AdminLogo from "../admin_elements/AdminLogo";
const AdminSideBar = () => {
  return (
    <div className="flex flex-col w-64 border-b-2 p-5 bg-white border-r ">
      <AdminLogo />
      <div className="flex flex-col border-b pb-5">
        <LinkBtn
          destination="dashboard"
          label="Dashboard"
          variant="sidebar"
          img="/img/icons/dashboard.png"
        />

        <LinkBtn
          destination="products"
          label="Product"
          variant="sidebar"
          img="/img/icons/product.png"
        />

        <LinkBtn
          destination="admins_orders"
          label="Orders"
          variant="sidebar"
          img="/img/icons/cart.png"
        />

        <LinkBtn
          destination="customers"
          label="Customers"
          variant="sidebar"
          img="/img/icons/users.png"
        />

        <LinkBtn
          destination="reviews"
          label="Reviews"
          variant="sidebar"
          img="/img/icons/empty_star.png"
        />

        <LinkBtn
          destination="settings"
          label="Settings"
          variant="sidebar"
          img="/img/icons/settings.png"
        />
      </div>
      <div className="py-5">
        <LinkBtn
          destination=""
          label="Extras"
          variant="sidebar"
          img="/img/icons/add.png"
        />
      </div>
    </div>
  );
};

export default AdminSideBar;
