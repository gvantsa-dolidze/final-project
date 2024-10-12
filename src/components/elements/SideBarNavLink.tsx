import { NavLink } from "react-router-dom";
const SideBarNavLink = () => {
  return (
    <NavLink
      to="dashboard"
      className="p-4 flex justify-start gap-5 hover:bg-BackgroundGray hover:rounded-md"
    >
      <img src="/img/icons/Add to cart.png" alt="img" /> <p>Dashboard</p>
    </NavLink>
  );
};

export default SideBarNavLink;
