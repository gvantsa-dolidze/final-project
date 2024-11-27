import LinkBtn from "../elements/LinkBtn";
import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import LoginAndCart from "./LoginAndCart";
import PromoHeader from "./PromoHeader";
import SearchBar from "./SearchBar";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

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
          <Menu>
            <MenuButton className=" md:hidden block w-10">
              <img src="/img/icons/menu.png" alt="" />
            </MenuButton>

            <MenuItems
              transition
              className="absolute right-0 z-10 mt-10 w-full origin-top-right  bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="py-1 space-y-4 pb-5">
                <MenuItem>
                  <LinkBtn destination="/" label="Home" variant="sidebar" />
                </MenuItem>
                <MenuItem>
                  <LinkBtn destination="/listing_page" label="Categories" variant="sidebar" />
                </MenuItem>
                <MenuItem>
                  <LinkBtn destination="/About" label="About" variant="sidebar" />
                </MenuItem>
                <MenuItem>
                  <LinkBtn destination="/contact" label="Contact" variant="sidebar" />
                </MenuItem>
                <div className="w-80 flex gap-5 justify-center ">
                  <MenuItem>
                    <LinkBtn destination="/login_page" label="Login" variant='primary' img="/img/icons/arrow_right.png"
                      reverse={true} />
                  </MenuItem>
                  <MenuItem>
                    <LinkBtn className="flex-column" destination="/sign_up_page" label="Sign up" variant="primary" img="/img/icons/arrow_right.png"
                      reverse={true} />
                  </MenuItem>
                </div>

              </div>
            </MenuItems>
          </Menu>

        </div>
      </div>
    </div>
  );
};

export default Header;
