import PopOver from "./PopOver";
import LinkBtn from "../elements/LinkBtn";


interface HeaderNavProps {
  home: string;
  about: string;
  contact: string;
}

const HeaderNav: React.FC<HeaderNavProps> = () => {
  return (
    <div className="gap-5 md:flex hidden">
      <LinkBtn destination="/" label='Home' variant="link" />
      <PopOver
        categories="Categories" />
      <LinkBtn destination="/about" label='About' variant="link" />
      <LinkBtn destination="/contact" label='Contact' variant="link" />
    </div>
  );
};

export default HeaderNav;
