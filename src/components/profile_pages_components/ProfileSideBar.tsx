import { NavLink } from "react-router-dom"

const ProfileSideBar = () => {
  return (
    <div className="flex flex-col w-1/4 border-r-2 p-5">
        <NavLink to="orders" className="p-4 flex justify-start gap-5 hover:bg-BackgroundGray hover:rounded-md">
          <img src="/img/icons/Add to cart.png" alt="img" /> <p>Orders</p>
        </NavLink>
        <NavLink to="wishlists" className="p-4 flex justify-start gap-5 hover:bg-BackgroundGray hover:rounded-md">
          <img src="/img/icons/Heart.png" alt="img" /> <p>Wishlists</p>
        </NavLink>
        <NavLink to="address" className="p-4 flex justify-start gap-5 hover:bg-BackgroundGray hover:rounded-md">
          <img src="/img/icons/Delivery.png" alt="img" /> <p>Address</p>
        </NavLink>
        <NavLink to="password" className="p-4 flex justify-start gap-5 hover:bg-BackgroundGray hover:rounded-md">
          <img src="/img/icons/Key.png" alt="img" /> <p>Password</p>
        </NavLink>
        <NavLink to="account_detail" className="p-4 flex justify-start gap-5 hover:bg-BackgroundGray hover:rounded-md">
          <img src="/img/icons/User.png" alt="img" /> <p>Account Detail</p>
        </NavLink>
        <NavLink to="logout" className="p-4 flex justify-start gap-5 hover:bg-BackgroundGray hover:rounded-md">
          <img src="/img/icons/Logout.png" alt="img" /> <p>Logout</p>
        </NavLink>
      </div>
  )
}

export default ProfileSideBar