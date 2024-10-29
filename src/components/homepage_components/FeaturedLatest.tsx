import { Outlet } from "react-router";
import LinkBtn from "../elements/LinkBtn";
const FeaturedLatest = () => {
  return (
    <div className="max-w-1116 m-auto py-16">
      <div className="text-center space-x-4 flex justify-center items-center">
        <LinkBtn  label='Featured' variant="link" destination="featured"/>
        <LinkBtn  label='Latest' variant="link" destination="Latest"/>
      </div>
      <Outlet />
    </div>
  );
};

export default FeaturedLatest;
