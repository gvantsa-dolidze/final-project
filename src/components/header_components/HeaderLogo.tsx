import { NavLink } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <NavLink to="/" className="flex items-center gap-1">
      <img src="/img/logo/Logomark.png" alt="logo" />

      <span className="hidden lg:block ">Ecommerce</span>
    </NavLink>
  );
};

export default HeaderLogo;
