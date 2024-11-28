import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import LinkBtn from "./LinkBtn";

interface PopOverProps {
  categories: string;
}

const PopOver: React.FC<PopOverProps> = ({ categories }) => {
  return (
    <Popover className="relative">
      <PopoverButton className="flex outline-none">
        {categories}
        <img src="/img/icons/chevron_down.png" alt="arrow_down" />
      </PopoverButton>
      <PopoverPanel
        anchor="bottom"
        className="flex flex-col gap-3 bg-white rounded-md border border-gray-200 mt-3"
      >
        <LinkBtn
          destination="/profile_page/orders"
          label="Orders"
          variant="sidebar"
        />
        <LinkBtn
          destination="/profile_page/wishlists"
          label="Wishlist"
          variant="sidebar"
        />
        <LinkBtn
          destination="/profile_page/address"
          label="Address"
          variant="sidebar"
        />
        <LinkBtn
          destination="/profile_page/password"
          label="Password"
          variant="sidebar"
        />
        <LinkBtn
          destination="/profile_page/account_detail"
          label="Account Detail"
          variant="sidebar"
        />
        <LinkBtn
          destination="/profile_page/logout"
          label="logout"
          variant="sidebar"
        />
      </PopoverPanel>
    </Popover>
  );
};

export default PopOver;
