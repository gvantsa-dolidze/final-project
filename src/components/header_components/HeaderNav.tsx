import { NavLink } from "react-router-dom"

interface HeaderNavProps {
  home: string,
  categories: string,
  about: string,
  contact: string;
}

const HeaderNav: React.FC<HeaderNavProps> = ({home, categories, about, contact}) => {
  return (
    <div className="space-x-5 flex">
        <NavLink to='/'>{ home }</NavLink>
        <NavLink to='/' className='flex'>{ categories }<img src="/img/icons/Chevron Down.png" alt="arrow_down" /></NavLink>
        <NavLink to='/about'>{ about }</NavLink>
        <NavLink to='/contact'>{ contact }</NavLink>
    </div>
  )
}

export default HeaderNav