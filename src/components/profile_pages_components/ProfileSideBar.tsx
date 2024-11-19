import LinkBtn from "../elements/LinkBtn";

const ProfileSideBar = () => {
  return (
    <div className="flex flex-col w-1/4 border-r-2 p-5">
      <LinkBtn
        destination="orders"
        label="Orders"
        variant="sidebar"
        img="/img/icons/add_to_cart.png"
      />
      <LinkBtn
        destination="wishlists"
        label="Wishlists"
        variant="sidebar"
        img="/img/icons/heart.png"
      />
      <LinkBtn
        destination="address"
        label="Address"
        variant="sidebar"
        img="/img/icons/delivery.png"
      />
      <LinkBtn
        destination="password"
        label="Password"
        variant="sidebar"
        img="/img/icons/key.png"
      />
      <LinkBtn
        destination="account_detail"
        label="Account Detail"
        variant="sidebar"
        img="/img/icons/user.png"
      />
      <LinkBtn
        destination="logout"
        label="Logout"
        variant="sidebar"
        img="/img/icons/logout.png"
      />
    </div>
  );
};

export default ProfileSideBar;
