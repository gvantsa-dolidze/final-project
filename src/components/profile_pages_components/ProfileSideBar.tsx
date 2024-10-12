import { NavLink } from "react-router-dom";
import LinkBtn from "../elements/LinkBtn";

const ProfileSideBar = () => {
  return (
    <div className="flex flex-col w-1/4 border-r-2 p-5">
      <LinkBtn
        destination="orders"
        label="Orders"
        variant="sidebar"
        img="/img/icons/Add to cart.png"
      />
      <LinkBtn
        destination="wishlists"
        label="Wishlists"
        variant="sidebar"
        img="/img/icons/Heart.png"
      />
      <LinkBtn
        destination="address"
        label="Address"
        variant="sidebar"
        img="/img/icons/Delivery.png"
      />
      <LinkBtn
        destination="password"
        label="Password"
        variant="sidebar"
        img="/img/icons/Key.png"
      />
      <LinkBtn
        destination="account_detail"
        label="Account Detail"
        variant="sidebar"
        img="/img/icons/User.png"
      />
      <LinkBtn
        destination="logout"
        label="Logout"
        variant="sidebar"
        img="/img/icons/Logout.png"
      />
    </div>
  );
};

export default ProfileSideBar;
