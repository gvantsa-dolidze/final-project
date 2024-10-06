import { NavLink } from "react-router-dom";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

interface PopOverProps { 
    categories: string;
    perfume: string;
    trousers: string;
    shoe: string;
    handbag: string;
    hat: string;
    thermos: string;
  }

const PopOver: React.FC<PopOverProps> = ({
    categories,
    perfume,
    trousers,
    shoe,
    handbag,
    hat,
    thermos,
  }) => {
  return (
    <Popover className="relative">
        <PopoverButton className="flex outline-none">
          {categories}
          <img src="/img/icons/Chevron Down.png" alt="arrow_down" />
        </PopoverButton>
        <PopoverPanel anchor="bottom" className="flex flex-col gap-3 bg-white rounded-md border border-gray-200 mt-3">
          <NavLink to="/perfume" className="hover:bg-BackgroundGray px-4 py-2">{perfume}</NavLink>
          <NavLink to="/trousers" className="hover:bg-BackgroundGray px-4 py-2">{trousers}</NavLink>
          <NavLink to="/shoe" className="hover:bg-BackgroundGray px-4 py-2">{shoe}</NavLink>
          <NavLink to="/handbag" className="hover:bg-BackgroundGray px-4 py-2">{handbag}</NavLink>
          <NavLink to="/hat" className="hover:bg-BackgroundGray px-4 py-2">{hat}</NavLink>
          <NavLink to="/thermos" className="hover:bg-BackgroundGray px-4 py-2">{thermos}</NavLink>
        </PopoverPanel>
      </Popover>
  )
}

export default PopOver