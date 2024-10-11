import { Outlet } from "react-router-dom";
import ProfileSideBar from "../components/profile_pages_components/ProfileSideBar";
import Breadcrumb from "../components/elements/Breadcrumb";
import Layout from "../components/layout/Layout"

const ProfilePage = () => {
  return (
    <Layout>
      <div className="bg-BackgroundGray py-5">
        <Breadcrumb label='My Account' title='My Account'/>
      </div>
      <div className="max-w-1116 m-auto flex py-10">
        <ProfileSideBar />
        {/* Content Area */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;
