import EditCard from "./EditCard";
import PlaceOrder from "./PlaceOrder";

const YourOrder = () => {
  return (
    <div className="border-l-2 pl-20">
      <h3 className="text-start">Your Order</h3>
      <EditCard />
      <PlaceOrder />
    </div>
  );
};

export default YourOrder;
