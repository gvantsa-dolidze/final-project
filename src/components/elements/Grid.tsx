import { CardNew } from "../elements/CardNew";

import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { useEffect } from "react";
import {
  getAllProducts,
  getByCategory,
} from "../../store/app/AllProductsReducer";
import { useParams } from "react-router";

const Grid = () => {
  const dispatch = useAppDispatch();
  const { category_id } = useParams();

  useEffect(() => {
    if (category_id) {
      dispatch(getByCategory(category_id));
    } else {
      dispatch(getAllProducts());
    }
  }, [category_id]);

  const products = useAppSelector((state) => state.allProduct.data || []);

  return (
    <div className="max-w-1116 m-auto py-16 space-y-5">
      <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {products.map((product: any) => (
          <CardNew
            key={product.id}
            id={product.id}
            image={product.image}
            price={product.price}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Grid;
