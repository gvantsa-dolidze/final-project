import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import LoginAndCart from "./LoginAndCart";
import PromoHeader from "./PromoHeader";
import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <div>
      <PromoHeader content="Get 25% OFF on your first order. Order Now" />
      <div className="flex items-center space-x-28 max-w-1116 m-auto pt-3 pb-3 justify-between">
        <div className="flex items-center gap-[116px]">
          <HeaderLogo />
          <HeaderNav
            home="Home"
            categories="Categories"
            about="About"
            contact="Contact"
          />
        </div>
        <div className="flex">
          <SearchBar />
          <LoginAndCart />
        </div>
      </div>
    </div>
  );
};

export default Header;
