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
          img="/img/icons/Dashboard.png"
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
          img="/img/icons/Cart.png"
        />

        <LinkBtn
          destination="customers"
          label="Customers"
          variant="sidebar"
          img="/img/icons/Users.png"
        />

        <LinkBtn
          destination="reviews"
          label="Reviews"
          variant="sidebar"
          img="/img/icons/Empty Star.png"
        />

        <LinkBtn
          destination="settings"
          label="Settings"
          variant="sidebar"
          img="/img/icons/Settings.png"
        />
      </div>
      <div className="py-5">
        <LinkBtn
          destination=""
          label="Extras"
          variant="sidebar"
          img="/img/icons/Add.png"
        />
      </div>
    </div>
  );
};

export default AdminSideBar;
