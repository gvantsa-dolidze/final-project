import HeaderLogo from "./header_elements/HeaderLogo";
import HeaderNav from "./header_elements/HeaderNav";
import LoginAndCart from "./header_elements/LoginAndCart";
import PromoHeader from "./header_elements/PromoHeader";
import SearchBar from "./header_elements/SearchBar";
const Header = () => {
  return (
    <div>
      <PromoHeader />
      <div className="flex items-center space-x-28 max-w-1116 m-auto pt-3 pb-3">
        <div className="flex items-center gap-[116px]">
          <HeaderLogo />
          <HeaderNav />
        </div>

        <SearchBar />
        <LoginAndCart />
      </div>
    </div>
  );
};

export default Header;
