import { NavLink } from "react-router-dom";

const FooterNav = () => {
  return (
    <div className="flex space-x-10 text-start">
      <div>
        <h2>SUPPORT</h2>
        <nav className="flex flex-col mt-10 gap-2">
          <NavLink to="/">FAQ</NavLink>
          <NavLink to="/">Terms of use</NavLink>
          <NavLink to="/">Privacy Policy</NavLink>
        </nav>
      </div>
      <div>
        <h2>COMPANY</h2>
        <nav className="flex flex-col mt-10 gap-2">
          <NavLink to="/">About us</NavLink>
          <NavLink to="/">Contact</NavLink>
          <NavLink to="/">Careers</NavLink>
        </nav>
      </div>
      <div>
        <h2>SHOP</h2>
        <nav className="flex flex-col mt-10 gap-2">
          <NavLink to="/">My Account</NavLink>
          <NavLink to="/">Checkout</NavLink>
          <NavLink to="/">Cart</NavLink>
        </nav>
      </div>
    </div>
  );
};

export default FooterNav;
