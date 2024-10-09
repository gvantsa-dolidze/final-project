import OrdersCardElement from "./OrdersCardElement";


const Orders = () => {
  return (
    <div className="flex  flex-col pl-10 space-y-10">
      <h3 className="text-start">Orders</h3>
      <OrdersCardElement />
      <OrdersCardElement />
    </div>
  );
};

export default Orders;
