import { CardNew } from "../elements/CardNew";

import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { useEffect } from "react";
import { getBestSellingProducts } from "../../store/app/BestSellingProductsReducer";

const BestSelling = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getBestSellingProducts());
  });

  const products = useAppSelector(
    (state) => state.bestSellingProducts.data || []
  );

  return (
    <div className="max-w-1116 m-auto py-16 space-y-5">
      <div className="text-center">
        <p>SHOP NOW</p>
        <h2>Best Selling</h2>
      </div>
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

export default BestSelling;
