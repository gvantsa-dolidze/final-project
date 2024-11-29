import { Outlet } from "react-router";
import DetailsAndReviews from "./DetailsAndReviews";
const AboutProduct = () => {
  return (
    <div className="max-w-1116 m-auto py-28 md:flex justify-around gap-5">
      <DetailsAndReviews />
      <Outlet />
    </div>
  );
};

export default AboutProduct;
