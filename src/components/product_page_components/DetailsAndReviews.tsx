import { NavLink } from "react-router-dom";
const DetailsAndReviews = () => {
  return (
    <div className="space-y-5 w-[241px]">
      <NavLink to="" className="flex gap-3 px-4 py-3 w-[241px] cursor-pointer">
        <img src="/img/icons/More.png" alt="dots" />
        <span>Details</span>
      </NavLink>
      <NavLink to="" className="flex gap-3 px-4 py-3 w-[241px] cursor-pointer">
        <img src="/img/icons/Empty Star.png" alt="star" />
        <span>Reviews</span>
      </NavLink>
    </div>
  );
};

export default DetailsAndReviews;
