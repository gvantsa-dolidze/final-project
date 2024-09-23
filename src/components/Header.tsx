import HeaderLogo from "./elements/HeaderLogo";
import HeaderNav from "./elements/HeaderNav";
import PromoHeader from "./elements/PromoHeader";
const Header = () => {
  return (
    <div>
      <PromoHeader />
      <div className="flex items-center space-x-28">
        <HeaderLogo />
        <HeaderNav />
      </div>
    </div>
  );
};

export default Header;
