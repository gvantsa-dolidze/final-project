import CartCardElement from "./CartCardElement";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
// import { useEffect } from "react";
// import { getCart } from "../../store/app/CartReducer";


const CartElement = () => {
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getCart());
  // },[]);

  const cart = useAppSelector((state) => state.cart.data || []);

  return (
    <div className="flex flex-col w-full">
      <h3 className="border-b pb-5 text-start">Your cart</h3>
      {cart.map((cart: any) => (
        <CartCardElement
          id={cart.id}
          title={cart.title}
          quantity={cart.quantity}
          price={cart.price}
          image={cart.image}
        />
      ))}
    </div>
  );
};

export default CartElement;
