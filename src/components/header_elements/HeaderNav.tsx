import { NavLink } from "react-router-dom"

const HeaderNav = () => {
  return (
    <div className="space-x-5 flex">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/' className='flex'>Categories<img src="/img/icons/Chevron Down.png" alt="arrow_down" /></NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
    </div>
  )
}

export default HeaderNav