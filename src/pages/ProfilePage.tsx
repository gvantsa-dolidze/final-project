import { Outlet } from "react-router-dom";
import ProfileSideBar from "../components/profile_pages_components/ProfileSideBar";
import Breadcrumb from "../components/elements/Breadcrumb";

const ProfilePage = () => {
  return (
    <div>
      <div className="bg-BackgroundGray py-5">
        <Breadcrumb />
      </div>
      <div className="max-w-1116 m-auto flex py-10">
        <ProfileSideBar />
        {/* Content Area */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
