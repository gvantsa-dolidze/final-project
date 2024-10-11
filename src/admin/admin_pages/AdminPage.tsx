import { Outlet } from "react-router-dom";
import AdminSideBar from "../admin_components/AdminSideBar";

const AdminPage = () => {
  return (
    <div className="bg-BackgroundGray h-screen">
        <div className="max-w-[1440px] m-auto flex py-10">
            <AdminSideBar />
        <div className="flex-1">
            <Outlet />
        </div>
        </div>
        
        
    </div>
  )
}

export default AdminPage