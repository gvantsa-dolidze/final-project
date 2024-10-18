import Button from "../elements/Button";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import LoginAndCart from "./LoginAndCart";
import PromoHeader from "./PromoHeader";
import SearchBar from "./SearchBar";
const Header = () => {
  return (
    <div>
      <PromoHeader content="Get 25% OFF on your first order. Order Now" />
      <div className="flex items-center justify-between gap-5 max-w-1116 m-auto pt-3 pb-3">
        <div className="flex items-center w-[641px] justify-between gap-5">
          <HeaderLogo />
          <HeaderNav home="Home" about="About" contact="Contact" />
        </div>
        <div className="flex w-[370px] justify-end gap-5">
          <SearchBar />
          <LoginAndCart />
          <Button
            className=" md:hidden block w-10"
            variant="link"
            img="/img/icons/Menu.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
