import { CardNew } from "../elements/CardNew";

import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { useEffect } from "react";
import { getAllProducts } from '../../store/app/AllProductsReducer'

const Grid = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  });

  const products = useAppSelector(
    (state) => state.allProduct.data || []
  );

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
