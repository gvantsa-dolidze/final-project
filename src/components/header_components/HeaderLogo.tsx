import { NavLink } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <NavLink to="/" className="flex items-center gap-1 p-2">
      <img src="/img/logo/logomark.png" alt="logo" />

      <span className="hidden lg:block ">Ecommerce</span>
    </NavLink>
  );
};

export default HeaderLogo;
