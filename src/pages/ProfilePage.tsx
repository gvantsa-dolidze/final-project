import { Outlet } from "react-router-dom";
import ProfileSideBar from "../components/profile_pages_components/ProfileSideBar";

const ProfilePage = () => {
  return (
    <div className="max-w-1116 m-auto flex">
      <ProfileSideBar />
      {/* Content Area */}
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default ProfilePage;
