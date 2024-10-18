import PopOver from "./PopOver";
import LinkBtn from "../elements/LinkBtn";


interface HeaderNavProps {
  home: string;
  about: string;
  contact: string;
}

const HeaderNav: React.FC<HeaderNavProps> = ({
  // home,
  // about,
  // contact,
}) => {
  return (
    <div className="space-x-5 md:flex hidden">
      <LinkBtn  destination="/" label='Home' variant="link"/>
      <PopOver 
          categories="Categories"
          perfume='Perfume'
          trousers='Trousers'
          shoe='Shoe'
          handbag='Handbag'
          hat='Hat'
          thermos='Thermos'
      />
      <LinkBtn  destination="/about" label='About' variant="link"/>
      <LinkBtn  destination="/contact" label='Contact' variant="link"/>
    </div>
  );
};

export default HeaderNav;
