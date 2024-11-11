import CheckBtn from "../elements/CheckBtn";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { getAllCategories } from "../../store/app/AllCategoriesReducer";

const Categories = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  });

  const categories = useAppSelector((state) => state.allCategories.data || []);
  
  return (
    <div className="flex flex-col text-start">
      <h3>Categories</h3>
      <div className="mt-5">   
        {categories.map((category: any) => (
          <CheckBtn label={category} id={category} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
