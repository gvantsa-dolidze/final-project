import { NavLink } from "react-router-dom";
const LoginAndCart = () => {
  return (
    <div className="flex gap-8 shrink-0 items-center">
      <NavLink to="//cart_page">
        <img src="/img/icons/cart.png" alt="login"/>
      </NavLink>

      <NavLink to="/">
        <img src="/img/icons/user.png" alt="cart"/>
      </NavLink>
    </div>
  );
};

export default LoginAndCart;
