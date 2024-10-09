import { NavLink, Outlet } from "react-router-dom";

const ProfilePage = () => {
  return (
    <div className="max-w-1116 m-auto flex">
      {/* Sidebar */}
      <div className="flex flex-col w-1/4">
        <NavLink to="orders_page" className="mb-2">
          Orders
        </NavLink>
        <NavLink to="wishlists_page" className="mb-2">
          Wishlists
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
