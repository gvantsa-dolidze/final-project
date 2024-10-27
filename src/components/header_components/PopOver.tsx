import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import LinkBtn from "../elements/LinkBtn";

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
    // perfume,
    // trousers,
    // shoe,
    // handbag,
    // hat,
    // thermos,
  }) => {
  return (
    <Popover className="relative">
        <PopoverButton className="flex outline-none">
          {categories}
          <img src="/img/icons/chevron_down.png" alt="arrow_down" />
        </PopoverButton>
        <PopoverPanel anchor="bottom" className="flex flex-col gap-3 bg-white rounded-md border border-gray-200 mt-3">
        <LinkBtn destination="/listing_page/" label="perfume" variant="sidebar" />
        <LinkBtn destination="" label="trousers" variant="sidebar" />
        <LinkBtn destination="" label="shoe" variant="sidebar" />
        <LinkBtn destination="" label="handbag" variant="sidebar" />
        <LinkBtn destination="" label="hat" variant="sidebar" />
        <LinkBtn destination="" label="thermos" variant="sidebar" />
        </PopoverPanel>
      </Popover>
  )
}

export default PopOver