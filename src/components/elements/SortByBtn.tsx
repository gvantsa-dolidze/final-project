import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import LinkBtn from "./LinkBtn";

const SortByBtn = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2  hover:bg-gray-50">
          SORT BY
          <ChevronDownIcon
            aria-hidden="true"
            className="-mr-1 h-5 w-5 text-gray-400"
          />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-44 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <LinkBtn destination="" label="Most Popular" variant="sidebar" />
          </MenuItem>
          <MenuItem>
            <LinkBtn destination="" label="Least Popular" variant="sidebar" />
          </MenuItem>
          <MenuItem>
            <LinkBtn destination="" label="Newest First" variant="sidebar" />
          </MenuItem>
          <MenuItem>
            <LinkBtn destination="" label="Oldest First" variant="sidebar" />
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default SortByBtn;
