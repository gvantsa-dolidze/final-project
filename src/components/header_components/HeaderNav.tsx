import { NavLink } from "react-router-dom";
import PopOver from "./PopOver";

interface HeaderNavProps {
  home: string;
  about: string;
  contact: string;
}

const HeaderNav: React.FC<HeaderNavProps> = ({
  home,
  about,
  contact,
}) => {
  return (
    <div className="space-x-5 flex">
      <NavLink to="/">{home}</NavLink>
      <PopOver 
          categories="Categories"
          perfume='Perfume'
          trousers='Trousers'
          shoe='Shoe'
          handbag='Handbag'
          hat='Hat'
          thermos='Thermos'
      />
      <NavLink to="/about">{about}</NavLink>
      <NavLink to="/contact">{contact}</NavLink>
    </div>
  );
};

export default HeaderNav;
