import { NavLink } from "react-router-dom"

const AdminSideBar = () => {
  return (
    <div className="flex flex-col w-1/4">
        <NavLink to='dashboard'>Dashboard</NavLink>
        <NavLink to='products'>Products</NavLink>
        <NavLink to='admins_orders'>Orders</NavLink>
        <NavLink to='customers'>Customers</NavLink>
        <NavLink to='reviews'>reviews</NavLink>
        <NavLink to='settings'>settings</NavLink>
    </div>
  )
}

export default AdminSideBar