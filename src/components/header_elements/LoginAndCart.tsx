import { NavLink } from "react-router-dom"
const LoginAndCart = () => {
  return (
    <div className="flex">
        <NavLink to='/'><img src="/img/icons/cart.png" alt="login" /></NavLink>
        <NavLink to='/'><img src="/img/icons/user.png" alt="cart" /></NavLink>
    </div>
  )
}

export default LoginAndCart