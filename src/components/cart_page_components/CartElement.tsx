import CartCardElement from "./CartCardElement";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useEffect } from "react";
import { getSingleProduct } from "../../store/app/SingleProductReducer";
import { useParams } from "react-router";

const CartElement = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(Number(id)));
  });

  const products = useAppSelector((state) => state.singleProduct.data || []);

  return (
    <div className="flex flex-col w-full">
      <h3 className="border-b pb-5 text-start">Your cart</h3>
      {products.map((product: any) => (
        <CartCardElement
          id={product.id}
          title={product.title}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
};

export default CartElement;
