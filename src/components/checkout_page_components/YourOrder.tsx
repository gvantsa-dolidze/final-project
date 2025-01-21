import EditCard from "./EditCard";
import React from "react";
import PlaceOrder from "../checkout_page_components/PlaceOrder";
import { useAppSelector } from "../../store/hooks";

const YourOrder: React.FC = () => {
  const cart = useAppSelector((state) => state.cart.data || []);

  const totalPrice = cart.reduce((acc, cartItem) => acc + (cartItem.price * cartItem.quantity), 0);

  return (
    <div className="md:w-96 m-auto">
      <h3 className="text-start">Your Order</h3>
      <EditCard />
      <PlaceOrder totalPrice={totalPrice} />
    </div>
  );
};

export default YourOrder;

