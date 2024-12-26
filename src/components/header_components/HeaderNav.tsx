import PopOver from "./PopOver";
import LinkBtn from "../elements/LinkBtn";


interface HeaderNavProps {
  home: string;
  about: string;
  contact: string;
}

const HeaderNav: React.FC<HeaderNavProps> = () => {
  return (
    <div className="md:flex hidden">
      <LinkBtn destination="/" label='Home' variant="sidebar"  className="py-6 px-5"/>
      <PopOver
        categories="Categories" className="hover:bg-BackgroundGray py-6 px-5"/>
      <LinkBtn destination="/about" label='About' variant="sidebar" className="py-6 px-5"/>
      <LinkBtn destination="/contact" label='Contact' variant="sidebar" className="py-6 px-5"/>
    </div>
  );
};

export default HeaderNav;
