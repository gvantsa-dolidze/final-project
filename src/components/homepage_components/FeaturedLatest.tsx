import { Outlet } from "react-router";
import LinkBtn from "../elements/LinkBtn";
const FeaturedLatest = () => {
  return (
    <div className="py-16">
      <p className="px-5 xl:hidden block">Elevate Your Style with the Latest Trends!
        Explore our exclusive collection of premium fashion 
        essentials designed to fit your lifestyle. From chic basics to statement pieces,
        we’ve got everything to keep you ahead of the fashion curve. Shop now and express 
        your unique style with ease!</p>
      <div className="max-w-1116 m-auto xl:block hidden">
        <div className="text-center space-x-4 flex justify-center items-center">
          <LinkBtn label='Featured' variant="link" destination="featured" />
          <LinkBtn label='Latest' variant="link" destination="Latest" />
        </div>
        <Outlet />
      </div>
    </div>

  );
};

export default FeaturedLatest;
