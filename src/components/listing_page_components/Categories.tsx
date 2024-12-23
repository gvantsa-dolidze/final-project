import RadioBtn from "../elements/RadioBtn";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { getAllCategories } from "../../store/app/AllCategoriesReducer";
import { useNavigate } from "react-router";

const Categories = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

  const categories = useAppSelector((state) => state.allCategories.data || []);

  return (
    <div className="flex flex-col text-start">
      <h3>Categories</h3>
      <div className="mt-5">
        {categories.map((category: any) => (
          <RadioBtn
            key={category}
            label={category}
            id={category}
            onClick={() => navigate(`/listing_page/${category}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
