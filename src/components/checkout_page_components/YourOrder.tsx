import Button from "../elements/Button";
import FullRoundedImg from "../elements/FullRoundedImg";
import PlaceOrder from "./PlaceOrder";

const YourOrder = () => {
  return (
    <div className="border-l-2 pl-20">
      <h3 className="text-start">Your Order</h3>
      <div className="flex  items-center gap-5 mt-5">
        <div className="flex gap-5">
          <FullRoundedImg />
          <FullRoundedImg />
          <FullRoundedImg />
        </div>

        <Button label="Edit Card" destination="/cart_page" />
      </div>

      <PlaceOrder />
    </div>
  );
};

export default YourOrder;
