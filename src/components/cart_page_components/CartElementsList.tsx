import CartCardElement from "./CartCardElement";
import { useAppSelector } from "../../store/hooks";

const CartElementsList = () => {
  const cart = useAppSelector((state) => state.cart.data);

  return (
    <div className="flex flex-col w-full">
      <h3 className="border-b pb-5 text-start">Your cart</h3>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500 mt-5">Your cart is empty</p>
      ) : (
        cart.map((cartItem: any) => (
          <CartCardElement
            key={cartItem.id}
            id={cartItem.id}
            title={cartItem.title}
            quantity={cartItem.quantity}
            price={cartItem.price}
            image={cartItem.image}
          />
        ))
      )}
    </div>
  );
};

export default CartElementsList;

