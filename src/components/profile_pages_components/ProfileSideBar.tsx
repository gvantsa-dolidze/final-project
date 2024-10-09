import { NavLink } from "react-router-dom"

const ProfileSideBar = () => {
  return (
    <div className="flex flex-col w-1/4">
        <NavLink to="orders" className="mb-2">
          Orders
        </NavLink>
        <NavLink to="wishlists" className="mb-2">
          Wishlists
        </NavLink>
        <NavLink to="address" className="mb-2">
          Address
        </NavLink>
        <NavLink to="password" className="mb-2">
          Password
        </NavLink>
        <NavLink to="account_detail" className="mb-2">
          Account Detail
        </NavLink>
        <NavLink to="logout" className="mb-2">
          Logout
        </NavLink>
      </div>
  )
}

export default ProfileSideBar