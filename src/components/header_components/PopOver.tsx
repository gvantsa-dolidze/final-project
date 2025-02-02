import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import LinkBtn from "../elements/LinkBtn";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { getAllCategories } from "../../store/app/AllCategoriesReducer";

interface PopOverProps {
  categories: string;
  className?: string;
}

const PopOver: React.FC<PopOverProps> = ({ categories, className='' }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  },[]);

  const allCategories = useAppSelector(
    (state) => state.allCategories.data || []
  );

  return (
    <Popover className={`relative ${className}`}>
      <PopoverButton className="flex outline-none">
        {categories}
        <img src="/img/icons/chevron_down.png" alt="arrow_down" />
      </PopoverButton>
      <PopoverPanel
        anchor="bottom"
        className={`flex flex-col gap-3 bg-white rounded-md border border-gray-200 mt-5`}
      >
        {allCategories.map((category: any) => (
          <LinkBtn
            key={category}
            destination={`/listing_page/${category}`}
            label={category}
            variant="sidebar"
            id={category}
          />
        ))}
      </PopoverPanel>
    </Popover>
  );
};

export default PopOver;
