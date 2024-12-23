import CartCardElement from "./CartCardElement";
import { useAppSelector } from "../../store/hooks";

const CartElementsList = () => {
  const cart = useAppSelector((state) => state.cart.data);

  return (
    <div className="flex flex-col w-full">
      <h3 className="border-b pb-5 text-start">Your cart</h3>
      {cart.map((cart: any) => (
        <CartCardElement
          key={cart.id}
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

export default CartElementsList;
