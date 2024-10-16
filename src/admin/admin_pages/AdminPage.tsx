import { Outlet } from "react-router-dom";
import AdminSideBar from "../admin_components/AdminSideBar";
import AdminHeader from "../admin_components/AdminHeader";

const AdminPage = () => {
  return (
    <div className="bg-BackgroundGray h-screen">
      <div className="max-w-[1440px] m-auto flex py-10 space-x-10">
        <AdminSideBar />
        <div className="flex-1">
          <AdminHeader />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
