import Button from "../elements/Button";
import { Outlet } from "react-router";
const FeaturedLatest = () => {
  return (
    <div className="max-w-1116 m-auto py-16">
      <div className="text-center space-x-4">
        <Button label="Featured" variant="link" />
        <Button label="Latest" variant="link"  />
      </div>
      <Outlet />
    </div>
  );
};

export default FeaturedLatest;
