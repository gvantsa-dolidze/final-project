import { CardNew } from "../elements/CardNew";

import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { useEffect } from "react";
import { getSimilarProducts } from '../../store/app/SimilarProductsReducer'

const SimilarProducts = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSimilarProducts());
  });

  const products = useAppSelector(
    (state) => state.similarProduct.data || []
  );

  return (
    <div className="max-w-1116 m-auto py-16 space-y-5">
     <div className="text-start">
      <h3>You might also like</h3>
      <h2>SIMILAR PRODUCTS</h2>
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

export default SimilarProducts;
