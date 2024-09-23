import HeaderLogo from "./elements/HeaderLogo";
import HeaderNav from "./elements/HeaderNav";
import LoginAndCart from "./elements/LoginAndCart";
import PromoHeader from "./elements/PromoHeader";
import SearchBar from "./elements/SearchBar";
const Header = () => {
  return (
    <div>
      <PromoHeader />
      <div className="flex items-center space-x-28 justify-center">
        <HeaderLogo />
        <HeaderNav />
        <SearchBar />
        <LoginAndCart />
      </div>
      
    </div>
  );
};

export default Header;
