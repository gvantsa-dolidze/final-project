import { NavLink } from "react-router-dom";

const HeaderLogo = () => {
  return (
    <NavLink to="/" className="flex items-center space-x-3">
      <img src="/img/logo/Logomark.png" alt="logo" /> <span>Ecommerce</span>
    </NavLink>
  );
};

export default HeaderLogo;
