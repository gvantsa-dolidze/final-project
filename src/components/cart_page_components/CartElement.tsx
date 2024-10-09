import CartCardElement from "./CartCardElement";


const CartElement = () => {
  return (
    <div className="flex flex-col w-full">
      <h3 className="border-b pb-5 text-start">Your cart</h3>
      <CartCardElement />
      <CartCardElement />
      <CartCardElement />
    </div>
  );
};

export default CartElement;
