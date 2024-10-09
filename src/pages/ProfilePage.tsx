import { NavLink, Outlet } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="max-w-1116 m-auto flex">
      {/* Sidebar */}
      <div className="flex flex-col w-1/4">
        <NavLink to="orders" className="mb-2">
          Orders
        </NavLink>
        <NavLink to="wishlists" className="mb-2">
          Wishlists
        </NavLink>
        <NavLink to="address" className="mb-2">
        Address
        </NavLink>
        <NavLink to="password" className="mb-2">
        Password
        </NavLink>
        <NavLink to="account_detail" className="mb-2">
        Account Detail
        </NavLink>
        <NavLink to="logout" className="mb-2">
        Logout
        </NavLink>
      </div>
      {/* Content Area */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfilePage;
