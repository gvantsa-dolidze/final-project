import { NavLink } from "react-router-dom"

const HeaderNav = () => {
  return (
    <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/'>Categories</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
    </div>
  )
}

export default HeaderNav