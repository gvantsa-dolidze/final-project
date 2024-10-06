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
    <Popover className="relative outline-none">
        <PopoverButton className="flex">
          {categories}
          <img src="/img/icons/Chevron Down.png" alt="arrow_down" />
        </PopoverButton>
        <PopoverPanel anchor="bottom" className="flex flex-col">
          <NavLink to="/analytics">{perfume}</NavLink>
          <NavLink to="/engagement">{trousers}</NavLink>
          <NavLink to="/security">{shoe}</NavLink>
          <NavLink to="/integrations">{handbag}</NavLink>
          <NavLink to="/integrations">{hat}</NavLink>
          <NavLink to="/integrations">{thermos}</NavLink>
        </PopoverPanel>
      </Popover>
  )
}

export default PopOver