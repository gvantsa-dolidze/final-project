import { CardNew } from "../elements/CardNew";

import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { useEffect } from "react";
import { getFeaturedProducts } from '../../store/app/FeaturedProductsReducer'

const Featured = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getFeaturedProducts());
  },[]);

  const products = useAppSelector(
    (state) => state.featuredProduct.data || []
  );

  return (
    <div className="max-w-1116 m-auto py-16 space-y-5">
     
      <div className="flex gap-5">
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

export default Featured;
